import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { FormEvent, useCallback, useState } from "react"

interface IProduct {
    id: string;
    title: string;
}
  
interface searchProps {
    searchResults: IProduct[];
}

export default function Search({ searchResults }: searchProps) {
    const router = useRouter();
    const [search, setSearch] = useState('');

    const handleSearch = useCallback((e: FormEvent) => {
        e.preventDefault();

        router.push(`/search?title=${encodeURIComponent(search)}`)

        setSearch('');
    }, [router, search]);

    return (
        <>
            <div>
                <form onSubmit={handleSearch}>
                    <input type="text" value={search} onChange={e => setSearch(e.target.value)} />
                    <button type="submit">Search</button>
                </form>
            </div>

            <div>
                <ul>
                    {searchResults.map(product => (
                    <li key={product.id}>{product.title}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export const getServerSideProps: GetServerSideProps<searchProps> = async (context) => {
    const { q } = context.query;

    if (!q) {
        return { props: { searchResults: [] } }
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products?title=${q}`);
    const searchResults = await response.json();

    return {
        props: {
            searchResults
        }
    }
  }