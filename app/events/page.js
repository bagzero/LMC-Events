import EVENTSHeroSection from "@/components/EVENTSHeroSection";
import Footer from "@/components/Footer";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <Main>
                <EVENTSHeroSection />
            </Main>
            <Footer />
        </>
    );
}