import * as React from "react"
import "../@style/index.css";
import "../../public/global.css";
import {Layout} from "../components/Layout";
import {graphql} from "gatsby";
import {Once} from "../components/Once";
import {TypeAnimation} from "react-type-animation";

export const query = graphql`
  query {
    allMarkdownRemark{
      totalCount
      edges {
        node {
          id
          frontmatter {
            description
            title
            date(formatString: "DD MMMM, YYYY")
            author
            type
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

const IndexPage = ({data}) => {
    return (
        <Layout>
            <Once cs={'home'}>
                <Once cs={'main_card'}>
                    <img className={'avatar'}
                         src={"http://39.96.54.181:88/note/202302192148974.jpg"}
                         style={{width: 100, borderRadius: 150}}
                         alt={'avatar'}/>
                    <TypeAnimation
                        sequence={["Hi bro. Here is me😊", 1000, "Architecture Graduate🎁", 1000, "but devote to CS🎈", 1000, "basketball lover🏀", 1000, "Eason Fan🍭", 1000,"nice to meet u🍭"]}
                        className={"hi"}>

                    </TypeAnimation>
                    <Once cs={'typing'}>原来神仙鱼横渡大海会断魂,听不到世人爱听的福音</Once>
                    <Once cs={'typing'}>不要紧,山野都有雾灯</Once>
                    <Once cs={'typing'}> Well you only need the light when it's burning low</Once>
                    <Once cs={'typing'}>你和谁结伴前来,是否比我精彩</Once>
                    <Once cs={'typing'}>而尴尬是在快餐厅里,我误把浆汁四周乱溅</Once>
                    <Once cs={'typing'}>...</Once>


                </Once>


            </Once>
        </Layout>
    )
}


export default IndexPage
