
import Image from "next/image"
import Link from "next/link"
import { PageHeader } from "@/components/ui/page-header"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader title="About SCS" description="Discover the Secret Chel Society gaming experience" />

      <div className="mt-8 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">What We Stand For</h2>
            <p className="text-lg mb-4">
              Secret Chel Society (SCS) represents the pinnacle of competitive NHL gaming, where skill meets strategy 
              and community thrives. We've built an ecosystem that rewards dedication, celebrates achievement, and 
              fosters meaningful connections between players worldwide.
            </p>
            <p className="text-lg mb-6">
              Since our establishment in 2020, SCS has revolutionized virtual hockey competition, creating an 
              environment where both newcomers and veterans can excel through our innovative ranking systems 
              and comprehensive player development programs.
            </p>
            <Link href="/sign-up">
              <Button size="lg">Begin Your Journey</Button>
            </Link>
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden">
            <Image src="/placeholder.svg?height=400&width=600" alt="SCS Gaming Community" fill className="object-cover" />
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Competition Framework</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Championship Series</h3>
              <p>
                Intense 30-match campaigns featuring strategic matchmaking and dynamic skill-based divisions. 
                Each series culminates in high-stakes playoff tournaments that determine seasonal champions.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Elite Tournaments</h3>
              <p>
                Premier knockout competitions where the top 12 teams battle through elimination rounds, 
                featuring best-of-7 championship finals with comprehensive statistical tracking.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Seasonal Events</h3>
              <p>
                Special tournaments, draft showcases, and community challenges that keep the competitive 
                spirit alive year-round with unique rewards and recognition opportunities.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Alex Chen",
                role: "Executive Director",
                image: "/placeholder.svg?height=200&width=200",
              },
              {
                name: "Jordan Martinez",
                role: "Competition Manager",
                image: "/placeholder.svg?height=200&width=200",
              },
              {
                name: "Taylor Thompson",
                role: "Community Relations",
                image: "/placeholder.svg?height=200&width=200",
              },
              {
                name: "Casey Rivera",
                role: "Technology Lead",
                image: "/placeholder.svg?height=200&width=200",
              },
            ].map((staff, index) => (
              <div key={index} className="text-center">
                <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden mb-4">
                  <Image src={staff.image || "/placeholder.svg"} alt={staff.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-semibold">{staff.name}</h3>
                <p className="text-gray-500 dark:text-gray-400">{staff.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-100 dark:bg-gray-900 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">Connect With Us</h2>
          <p className="text-center text-lg mb-6">
            Ready to elevate your gaming experience? Join thousands of players who've made SCS their home!
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" asChild>
              <Link href="mailto:hello@scs.community">Get In Touch</Link>
            </Button>
            <Button asChild>
              <Link href="https://discord.gg/scs">Join Discord</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}


