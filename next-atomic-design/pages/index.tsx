import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import styled,{css} from 'styled-components'

const H1 = styled.h1`
  color:red;
`
const Span = styled.span`
  padding:8px 16px;
  font-weight:bold;
  text-align:center;
  background:red;
  border-radius:16px;
`
const GreyBox = css`
  padding:10px,30px;
  background:grey;
`
const H1Kakutyou = styled(H1)`
  font-size:2em;
  ${GreyBox}
`//mixin

const Theme = styled.span`
  color: ${(props) => props.theme.colors.red};
  font-size: ${(props) => props.theme.fontSizes[5]};
  margin: ${(props) => props.theme.space[2]};
`//theme.tsから参照する

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <H1>Hello,World <a href="https://nextjs.org">Next.js</a></H1>
        <Span>ここは設定しています</Span>
        <H1Kakutyou>これは継承</H1Kakutyou>
        <Theme>イェイ</Theme>
      </main>
    </div>
  )
}

export default Home
