import ARENADirectionsSection from "@/components/ARENADirectionsSection";
import ARENAFeaturesSection from "@/components/ARENAFeaturesSection";
import ARENAHeroSection from "@/components/ARENAHeroSection";
import ARENAQuestionsSection from "@/components/ARENAQuestionsSection";
import Footer from "@/components/Footer";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <Main>
                <ARENAHeroSection />
                <ARENAFeaturesSection />
                <ARENADirectionsSection />
                <ARENAQuestionsSection />
            </Main>
            <Footer />
        </>
    );
}