"use client";
import { usePathname } from "next/navigation";

export default function notFound() {
    const pathname = usePathname();
    const patharr = pathname.split("/");
    const productId = patharr[2];
    const reviewId = patharr[4];
    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <p>Product ID: {productId}</p>
            <p>Review ID: {reviewId}</p>
        </div>
    );
}