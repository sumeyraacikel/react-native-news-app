import { StyleSheet } from 'react-native';
import MainContainer from "../components/containers/MainContainer";
import StyledText from "../components/Texts/StyledText";
import NewsSection from "../components/News/NewsSection";
import {newsData, exploreData} from "../config/data";
import ExploreSection from "../components/Explore/ExploreSection";

export default function Home() {

    return (
            <MainContainer>
            <StyledText style={styles.sectionTitle} big>
            Trend Haberler
            </StyledText>
            <NewsSection data={newsData}/>
            <StyledText style={styles.sectionTitle} big>
                Keşfet
            </StyledText>
            <ExploreSection data={exploreData}/>
        </MainContainer>
    );
}
const styles = StyleSheet.create({
    sectionTitle: {
       marginTop: 25,
        marginLeft: 25
    },
});
