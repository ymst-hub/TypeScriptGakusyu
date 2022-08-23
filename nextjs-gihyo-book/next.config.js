/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: (() => {
    let compilerConfig = {
      styledComponents:true,
    }
    if (process.env.NODE_ENV === 'production'){
      compilerConfig = {
        ...compilerConfig,
        //本番環境 react testing libraryを削除
        reactRemoveProperties: {properties: ['^data-testid$']},
      }
    }
    return compilerConfig
  })(),
  async rewrites(){
    return[
      {
        //ex api/proxy
        source: `${process.env.NEXT_PUBLIC_API_BASE_PATH}:match*`,
        //ex http://localhost:8080
        destination: `${process.env.API_BASE_URL}:match*`,
      },
    ]
  },
}

module.exports = nextConfig
