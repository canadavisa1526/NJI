import ContactHeader from "@/components/ContactHeader";
import ContactInfo from "@/components/ContactInfo";
import ContactForm from "@/components/ContactForm";
import OfficeLocations from "@/components/OfficeLocations";

export default function Home() {
  return (
    <main className="min-h-screen">
      <ContactHeader />
      <ContactInfo />
      <ContactForm />
      <OfficeLocations />
    </main>
  );
}
