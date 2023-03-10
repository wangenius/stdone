import * as React from "react"
import {Layout} from "../components/Layout";
import Example from "../components/index/Panel";
import {RewardBar} from "../components/index/rewardBar";
import {Status} from "../components/index/Status";

const IndexPage = () => {
    return (
        <Layout>
            <Example/>

            <RewardBar/>
        </Layout>
    )
}


export default IndexPage
