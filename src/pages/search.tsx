import { useRouter } from "next/router";
import { FormEvent, useCallback, useState } from "react"

export default function Search() {
    const router = useRouter();
    const [search, setSearch] = useState('');

    const handleSearch = useCallback((e: FormEvent) => {
        e.preventDefault();

        router.push(`/search?q=${encodeURIComponent(search)}`)

        setSearch('');
    }, [router, search]);

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input type="text" value={search} onChange={e => setSearch(e.target.value)} />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}