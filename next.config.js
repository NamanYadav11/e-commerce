/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports={
  images:{
    domains:["links.papareact.com","fakestoreapi.com"]
  },
  evn:{
    stripe_public_key:process.env.STRIPE_PUBLIC_KEY
  }
}
