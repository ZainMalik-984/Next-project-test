import { notFound } from "next/navigation";

export default async function Review({ params} : {params: Promise<{ productId: string, reviewId: string }> }) {
    const { productId, reviewId } = await params;

    if (parseInt(reviewId) > 1000) {
        notFound();
    }
    return (
        <>
            <h1>Welcome to the review page for product {productId} and review {reviewId}</h1>
            <p>Review details...</p>
        </>
    );
}