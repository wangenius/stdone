import * as React from "react"
import {Layout} from "../components/Layout";
import Example from "../components/index/Panel";
import {LatestPost} from "../components/index/latestPost";
import {LatestCollection} from "../components/index/latestCollection";
import {RewardBar} from "../components/index/rewardBar";
import {Status} from "../components/index/Status";

const IndexPage = () => {
    return (
        <Layout>
            <Example/>
            <LatestPost/>
            <LatestCollection/>
            <Status/>
            <RewardBar/>
        </Layout>
    )
}


export default IndexPage
