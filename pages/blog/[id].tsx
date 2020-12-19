import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

const Blog = () => {
    const router = useRouter();
    const { id, category  } = router.query;

    return (
        <>
            <Head>Blog</Head>
            <h1>Blog</h1>
            <p>id: {id}</p>
            <p>category: {category}</p>
            <Link href="/blog/2?category=baby">Baby</Link>
            <Link href="/blog/2?category=furniture">Furniture</Link>
            <Link href="/blog/2?category=cloth">Clothes</Link>
        </>
    )
}

export default Blog;