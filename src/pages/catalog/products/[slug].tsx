import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { useCallback, useState } from 'react';

const AddToCartModal = dynamic(
    () => import('@/components/AddToCartModal'),
    { loading: () => <p>Carregando...</p>, ssr: false }
)

export default function Product() {
    const router = useRouter();
    const [isAddToCartModalVisible, setIsAddToCartModalVisible] = useState(false);

    const handleToCart = useCallback(() => {
        setIsAddToCartModalVisible(true);
    }, []);

    return (
        <div>
            <h2>{router.query.slug}</h2>

            <button type="button" onClick={handleToCart}>Add to cart</button>

            {isAddToCartModalVisible && <AddToCartModal />}
        </div>
    )
}