"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Code2,
  Database,
  Server,
  Zap,
  GitBranch,
  Mail,
  Github,
  Linkedin,
  MapPin,
  Coffee,
  Star,
  ExternalLink,
  Shield,
  Send,
  ChevronDown,
  Lock,
  Layers,
  Activity,
  Phone,
} from "lucide-react"

export default function BackendPortfolio() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [expandedProject, setExpandedProject] = useState<string | null>(null)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsLoaded(true)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed")
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 },
    )

    const sections = document.querySelectorAll(".scroll-reveal")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const skills = [
    {
      name: "Spring Boot",
      icon: <Code2 className="w-4 h-4" />,
      description: "Microservices, Security, JPA/Hibernate",
    },
    {
      name: "Laravel",
      icon: <Code2 className="w-4 h-4" />,
      description: "Eloquent ORM, Queues, API Resources",
    },
    {
      name: "PostgreSQL",
      icon: <Database className="w-4 h-4" />,
      description: "Optimisation, partitioning, réplication",
    },
    {
      name: "MySQL",
      icon: <Database className="w-4 h-4" />,
      description: "Clustering, performance tuning",
    },
    {
      name: "MongoDB",
      icon: <Database className="w-4 h-4" />,
      description: "Aggregation, sharding, indexing",
    },
    {
      name: "Docker",
      icon: <Server className="w-4 h-4" />,
      description: "Multi-stage builds, orchestration",
    },
    {
      name: "Keycloak",
      icon: <Lock className="w-4 h-4" />,
      description: "SSO, OAuth2, RBAC",
    },
    {
      name: "RabbitMQ",
      icon: <Zap className="w-4 h-4" />,
      description: "Message queuing, asynchrone",
    },
    {
      name: "Loki & Grafana",
      icon: <Activity className="w-6 h-6" />,
      description: "Log aggregation, monitoring",
    },
  ]

  const projects = [
    {
      id: "eagri",
      title: "E-AGRI - Plateforme e-commerce agricole",
      description: "Plateforme digitale rassemblant tous les acteurs de la chaîne de valeur du vivrier et aquacole",
      detailedDescription:
        "Développement de modules métiers essentiels sous forme de microservices : conseils et formation agricoles, bibliothèque de contenu, gestion des commandes, service d'alertes, services financiers. Système de notification hybride (SMS + push) asynchrone avec RabbitMQ.",
      tech: ["Spring Boot", "Java", "PostgreSQL", "MongoDB", "Keycloak", "Docker", "RabbitMQ", "Firebase"],
      impact: "Disponible sur Play Store & Apple Store",
      metrics: ["Architecture microservices", "Notifications hybrides SMS/Push", "Intégration services financiers"],
      icon: <Layers className="w-6 h-6" />,
    },
    {
      id: "wiagri",
      title: "WI-AGRI - Services agricoles digitaux",
      description: "Plateforme de services digitaux pour petits producteurs, coopératives et acheteurs agricoles",
      detailedDescription:
        "Développement de modules métiers : conseils agricoles, commandes, alertes, services financiers et historiques de transaction. Mise en œuvre d'un système de notification hybride asynchrone avec RabbitMQ pour SMS et notifications push Firebase.",
      tech: ["Spring Boot", "Java", "PostgreSQL", "MongoDB", "Docker", "RabbitMQ", "Firebase"],
      impact: "Disponible sur Play Store",
      metrics: ["Gestion exploitations agricoles", "Suivi prix du marché", "Services financiers intégrés"],
      icon: <Server className="w-6 h-6" />,
    },
    {
      id: "ocr",
      title: "OCR - Service d'extraction de données",
      description: "Service d'optimisation de collecte d'informations via reconnaissance optique pour Orange CI",
      detailedDescription:
        "Conception du backend orchestrant deux flux : processus OCR déclenché par QR code pour récupération temps réel d'informations depuis interface Orange, et processus de signature électronique de documents avec transmission sécurisée automatique.",
      tech: ["Spring Boot", "Java", "PostgreSQL", "Docker", "RabbitMQ"],
      impact: "Service interne Orange CI",
      metrics: ["Traitement OCR temps réel", "Signature électronique", "Intégration QR Code"],
      icon: <Activity className="w-6 h-6" />,
    },
    {
      id: "askoetude",
      title: "ASKO ÉTUDE - Plateforme d'orientation scolaire",
      description: "Plateforme d'accompagnement académique et d'orientation pour étudiants",
      detailedDescription:
        "Conception et développement complet du backend Laravel avec intégration frontend Blade. Système de réservation, demande d'assistance, librairie éducative, et CMS pour gestion de contenu éducatif.",
      tech: ["Laravel", "PHP", "MySQL", "Blade", "HTML5", "CSS3"],
      impact: "Site web askoetude.com",
      metrics: ["Recherche universités", "Système réservation", "Librairie documents éducatifs"],
      icon: <Code2 className="w-6 h-6" />,
    },
    {
      id: "lowly",
      title: "LOWLY VOYAGE - Gestion de déplacements",
      description: "Plateforme de planification de séjours en Côte d'Ivoire",
      detailedDescription:
        "Développement backend complet basé sur un noyau Booking personnalisé. Modules de gestion hôtelière, réservations d'hébergements, véhicules, billets, avec intégration moyens de paiement. Architecture modulaire et évolutive.",
      tech: ["Laravel", "Blade", "PHP", "MySQL", "Docker"],
      impact: "En cours de développement",
      metrics: ["Réservation hébergements", "Gestion événements", "Intégration paiement"],
      icon: <Server className="w-6 h-6" />,
    },
    {
      id: "microassur",
      title: "MICROASSUR - Micro-assurance",
      description: "Application de gestion de micro-assurance pour populations non bancarisées",
      detailedDescription:
        "Développement complet du backend et des API. Intégration gateway SMS et Firebase pour notifications. Gestion utilisateurs, droits, processus de contrôle et gestion des souscriptions avec système de paiement intégré.",
      tech: ["Laravel", "PHP", "MySQL", "Firebase", "AfricaHub Gateway"],
      impact: "Disponible sur Play Store",
      metrics: ["Gestion souscriptions", "Notifications SMS/Push", "Populations non bancarisées"],
      icon: <Shield className="w-6 h-6" />,
    },
  ]

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Formulaire soumis avec:", formData)
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      console.log("[v0] Envoi de la requête à /api/send-email")
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      console.log("[v0] Réponse reçue:", response.status, response.statusText)

      if (response.ok) {
        const result = await response.json()
        console.log("[v0] Succès:", result)
        setSubmitStatus("success")
        setFormData({ name: "", email: "", message: "" })
      } else {
        const errorData = await response.json()
        console.log("[v0] Erreur réponse:", errorData)
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("[v0] Erreur lors de l'envoi:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <section
        id="hero"
        ref={heroRef}
        className="min-h-screen flex items-center justify-center relative scroll-reveal"
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
        }}
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-green-400 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-20 right-20 w-2 h-2 bg-green-500 rounded-full animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 text-center space-y-8 px-4">
          <div className="space-y-6">
            <h1
              className={`text-6xl md:text-8xl font-bold text-white transition-all duration-1000 ${
                isLoaded ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"
              }`}
            >
              Beugre Yves Leopold
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-400 to-green-400 mx-auto animate-pulse"></div>
            <h2 className="text-2xl md:text-4xl text-gray-300 font-light">
              Développeur Backend – Java Spring Boot | PHP Laravel
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 mb-6">
              « Je bâtis des solutions ambitieuses avec exigence et créativité »
            </p>
            <p className="text-xl text-gray-400 leading-relaxed">
              Développeur backend passionné basé à Abidjan. Mon objectif : allier performance, clarté et élégance dans
              chaque architecture.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="px-6 py-3 bg-blue-500/20 border border-blue-400 text-blue-300 hover:bg-blue-500/30 transition-all">
              <Shield className="w-4 h-4 mr-2" />
              Sécurité avancée
            </Badge>
            <Badge className="px-6 py-3 bg-green-500/20 border border-green-400 text-green-300 hover:bg-green-500/30 transition-all">
              <Zap className="w-4 h-4 mr-2" />
              Performance optimisée
            </Badge>
            <Badge className="px-6 py-3 bg-purple-500/20 border border-purple-400 text-purple-300 hover:bg-purple-500/30 transition-all">
              <Layers className="w-4 h-4 mr-2" />
              Architecture évolutive
            </Badge>
          </div>

          <div className="flex justify-center gap-6">
            <Button
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-blue-500/25 transition-all"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Mail className="w-5 h-5 mr-2" />
              Discutons de votre projet
            </Button>
            <Button
              variant="outline"
              className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900 px-8 py-4 text-lg font-semibold bg-transparent transition-all"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Code2 className="w-5 h-5 mr-2" />
              Voir mes réalisations
            </Button>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-blue-400" />
          </div>
        </div>
      </section>

      <section id="profile" className="py-20 bg-gray-800 scroll-reveal">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">Profil Technique</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-gray-700 border-gray-600 hover:border-blue-400 transition-all">
                <CardContent className="p-6 text-center">
                  <Shield className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Sécurité</h3>
                  <p className="text-gray-300">Spring Security, Keycloak, LDAP, OAuth2, Duo Security</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-700 border-gray-600 hover:border-green-400 transition-all">
                <CardContent className="p-6 text-center">
                  <Zap className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Performance</h3>
                  <p className="text-gray-300">RabbitMQ, cache distribué, optimisation SQL, monitoring</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-700 border-gray-600 hover:border-purple-400 transition-all">
                <CardContent className="p-6 text-center">
                  <Layers className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Évolutivité</h3>
                  <p className="text-gray-300">Microservices, Docker, VPS, architecture modulaire</p>
                </CardContent>
              </Card>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed">
              Diplômé de l'ESATIC en Système Informatique et Génie Logiciel. Expérience chez Mobisoft sur des solutions
              digitales comme WI-AGRI et E-AGRI, et développeur freelance pour des entreprises du secteur éducatif et du
              tourisme. Expert en architecture microservices, sécurité et intégrations complexes.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 bg-gray-900 scroll-reveal">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-white">Compétences Clés</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <Card
                key={skill.name}
                className="bg-gray-800 border-gray-700 hover:border-blue-400 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg group-hover:scale-110 transition-transform">
                      {skill.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-gray-800 scroll-reveal">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-white">Projets Marquants</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className="bg-gray-700 border-gray-600 hover:border-blue-400 transition-all duration-300 cursor-pointer group"
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
              >
                <CardHeader className="border-b border-gray-600">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg group-hover:scale-110 transition-transform">
                      {project.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                      <Badge className="mt-2 bg-blue-500/20 border border-blue-400 text-blue-300">
                        {project.impact}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  <CardDescription className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </CardDescription>

                  {expandedProject === project.id && (
                    <div className="space-y-4 animate-in slide-in-from-top-2 duration-300">
                      <p className="text-gray-200 font-medium">{project.detailedDescription}</p>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-white">Réalisations clés:</h4>
                        <ul className="space-y-1">
                          {project.metrics.map((metric, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <Star className="w-3 h-3 text-green-400" />
                              <span className="text-sm text-gray-300">{metric}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        className="text-xs bg-gray-600 border border-gray-500 text-gray-300 hover:bg-gray-500"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <Button className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white transition-all">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {expandedProject === project.id ? "Masquer les détails" : "Voir les détails"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-900 text-white scroll-reveal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Contact</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Prêt à discuter de votre prochain défi technique ? Contactons-nous pour créer quelque chose
              d'exceptionnel.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold mb-6">Informations de contact</h3>

              {[
                { icon: <Mail className="w-6 h-6" />, label: "Email", value: "yvesleopoldbeugre98@gmail.com" },
                { icon: <Phone className="w-6 h-6" />, label: "Téléphone", value: "+225 0143609180 / 0799943674" },
                { icon: <Github className="w-6 h-6" />, label: "GitHub", value: "Voir profil GitHub" },
                { icon: <Linkedin className="w-6 h-6" />, label: "LinkedIn", value: "Voir profil LinkedIn" },
                { icon: <MapPin className="w-6 h-6" />, label: "Localisation", value: "Abidjan, Côte d'Ivoire" },
              ].map((contact, index) => (
                <div
                  key={contact.label}
                  className="flex items-center gap-4 p-4 bg-gray-800 border border-gray-700 rounded-lg hover:border-blue-400 transition-all"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-blue-400">{contact.icon}</div>
                  <div>
                    <h4 className="font-semibold text-white">{contact.label}</h4>
                    <p className="text-gray-300">{contact.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Envoyez-moi un message</h3>

              <form onSubmit={handleFormSubmit} className="space-y-6">
                {submitStatus === "success" && (
                  <div className="p-4 bg-green-500/20 border border-green-400 rounded-lg text-green-300">
                    Message envoyé avec succès ! Je vous répondrai bientôt.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 bg-red-500/20 border border-red-400 rounded-lg text-red-300">
                    Erreur lors de l'envoi. Veuillez réessayer ou me contacter directement.
                  </div>
                )}

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Nom</label>
                  <Input
                    className="bg-gray-800 border-gray-700 text-white focus:border-blue-400 focus:ring-blue-400"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Votre nom"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Email</label>
                  <Input
                    type="email"
                    className="bg-gray-800 border-gray-700 text-white focus:border-blue-400 focus:ring-blue-400"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="votre@email.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Message</label>
                  <Textarea
                    className="bg-gray-800 border-gray-700 text-white focus:border-blue-400 focus:ring-blue-400 min-h-[120px]"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Parlez-moi de votre projet backend..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white py-3 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                </Button>
              </form>
            </div>
          </div>

          <div className="text-center mt-16 pt-8 border-t border-gray-800">
            <div className="flex justify-center gap-6">
              <Button
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
                onClick={() => window.open("https://calendly.com/yvesleopoldbeugre98/30min", "_blank")}
              >
                <Coffee className="w-4 h-4 mr-2" />
                Prenons un café
              </Button>
              <Button
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
                onClick={() => window.open("https://github.com/yvesleopoldbeugre98", "_blank")}
              >
                <GitBranch className="w-4 h-4 mr-2" />
                Collaborons
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
