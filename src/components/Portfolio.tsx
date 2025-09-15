import heroBackground from "@/assets/hero-bg.jpg";
import { Button } from "@/components/ui/button-futuristic";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card-futuristic";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { 
  Github, 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone, 
  Code2, 
  Database, 
  Smartphone, 
  Globe, 
  Zap,
  Brain,
  Rocket,
  ExternalLink,
  X,
  Calendar,
  Users,
  Settings,
  Menu
} from "lucide-react";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setMobileMenuOpen(false); // Close mobile menu after navigation
  };
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Desenvolvimento Web",
      description: "Criação de sites modernos e responsivos com as mais recentes tecnologias web"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Sistemas Web",
      description: "Desenvolvimento de sistemas complexos para gestão empresarial e automação"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Apps Responsivos", 
      description: "Aplicações que funcionam perfeitamente em desktop, tablet e mobile"
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "APIs & Integrações",
      description: "Desenvolvimento de APIs RESTful e integração com sistemas terceiros"
    }
  ];

  const projects = [
    {
      title: "Sistema TFD",
      description: "Sistema completo de gestão para Tratamento Fora do Domicílio com dashboard interativo e controle de pacientes",
      tech: ["React", "Node.js", "PostgreSQL", "API REST"],
      status: "Finalizado",
      fullDescription: "O Sistema TFD é uma solução completa para gerenciamento de Tratamento Fora do Domicílio desenvolvido especificamente para a administração pública. O sistema oferece um dashboard intuitivo para acompanhamento de pacientes, controle de recursos financeiros, agendamento de consultas e relatórios detalhados.",
      features: [
        "Dashboard interativo com métricas em tempo real",
        "Gestão completa de pacientes e documentos",
        "Sistema de agendamento integrado",
        "Relatórios administrativos e financeiros",
        "Controle de acesso por níveis de permissão",
        "Integração com sistemas governamentais"
      ],
      challenges: "Desenvolvido seguindo padrões de segurança governamentais com foco na usabilidade e performance para atender grande volume de dados.",
      impact: "Automatizou processos manuais, reduzindo tempo de atendimento em 70% e melhorando a gestão de recursos públicos."
    },
    {
      title: "Site La",
      description: "Site institucional moderno com design responsivo e otimizações para SEO",
      tech: ["Next.js", "Tailwind CSS", "TypeScript", "Vercel"],
      status: "Finalizado",
      fullDescription: "Website institucional desenvolvido com foco em performance e experiência do usuário. Utiliza as mais modernas tecnologias web para garantir velocidade de carregamento, responsividade e otimização para motores de busca.",
      features: [
        "Design responsivo e moderno",
        "Otimização completa para SEO",
        "Performance otimizada (100% no Lighthouse)",
        "Sistema de conteúdo dinâmico",
        "Integração com analytics avançados",
        "Formulários de contato inteligentes"
      ],
      challenges: "Criação de uma identidade visual única combinada com alta performance técnica e excelente posicionamento nos mecanismos de busca.",
      impact: "Aumento de 300% no tráfego orgânico e melhoria significativa na taxa de conversão de visitantes em leads."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gradient-primary">Marcos Roberto</h2>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">Sobre</button>
              <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors">Serviços</button>
              <button onClick={() => scrollToSection('pricing')} className="text-foreground hover:text-primary transition-colors">Preços</button>
              <button onClick={() => scrollToSection('projects')} className="text-foreground hover:text-primary transition-colors">Projetos</button>
              <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors">Contato</button>
            </div>

            {/* Mobile Navigation */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-gradient-surface border-primary/30">
                <nav className="flex flex-col space-y-6 mt-8">
                  <button onClick={() => scrollToSection('home')} className="text-left text-lg text-foreground hover:text-primary transition-colors">Home</button>
                  <button onClick={() => scrollToSection('about')} className="text-left text-lg text-foreground hover:text-primary transition-colors">Sobre</button>
                  <button onClick={() => scrollToSection('services')} className="text-left text-lg text-foreground hover:text-primary transition-colors">Serviços</button>
                  <button onClick={() => scrollToSection('pricing')} className="text-left text-lg text-foreground hover:text-primary transition-colors">Preços</button>
                  <button onClick={() => scrollToSection('projects')} className="text-left text-lg text-foreground hover:text-primary transition-colors">Projetos</button>
                  <button onClick={() => scrollToSection('contact')} className="text-left text-lg text-foreground hover:text-primary transition-colors">Contato</button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        id="home" 
        className="pt-20 pb-20 px-4 min-h-screen flex items-center relative"
        style={{
          backgroundImage: `var(--gradient-hero-overlay), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center fade-in">
            <div className="flex justify-center mb-8">
              <div className="w-32 h-32 rounded-full bg-gradient-primary p-1 animate-pulse-glow">
                <div className="w-full h-full rounded-full bg-surface flex items-center justify-center">
                  <Brain className="w-16 h-16 text-primary animate-float" />
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient-primary">Marcos</span>{" "}
              <span className="text-gradient-secondary">Roberto</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Desenvolvedor Full Stack
            </p>
            
            <p className="text-lg text-foreground max-w-2xl mx-auto mb-8">
              Transformando ideias em soluções digitais inovadoras com tecnologia de ponta e design futurista
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="hero" size="hero" onClick={() => scrollToSection('contact')}>
                <Rocket className="w-5 h-5 mr-2" />
                Iniciar Projeto
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollToSection('projects')}>
                <Zap className="w-5 h-5 mr-2" />
                Ver Projetos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold mb-6 text-gradient-primary">Sobre Mim</h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto leading-relaxed">
              Sou um desenvolvedor apaixonado por criar experiências digitais únicas. 
              Com expertise em desenvolvimento web e sistemas, transformo conceitos complexos 
              em soluções elegantes e funcionais, sempre focando na melhor experiência do usuário 
              e nas tecnologias mais avançadas do mercado.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-surface/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold mb-6 text-gradient-secondary">Serviços</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Oferecendo soluções completas para suas necessidades digitais
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} variant="hover" className="text-center slide-in-left" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-gradient-primary rounded-full text-primary-foreground glow-primary">
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-gradient-surface">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold mb-6 text-gradient-primary">Tabela de Preços</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Investimento transparente para transformar suas ideias em realidade digital
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Sites Table */}
            <Card variant="hover" className="fade-in">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-gradient-primary flex items-center">
                    <Globe className="w-6 h-6 mr-2" />
                    Desenvolvimento de Sites
                  </CardTitle>
                </div>
                <CardDescription>
                  Soluções web modernas e responsivas para sua presença online
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border border-primary/30 rounded-lg overflow-hidden bg-surface/50">
                    <div className="bg-gradient-primary text-primary-foreground px-4 py-2 text-sm font-medium">
                      Tipo de Site
                    </div>
                    <div className="p-4 space-y-3">
                      <div className="flex justify-between items-center pb-2 border-b border-border">
                        <span className="text-sm">Landing Page</span>
                        <span className="text-primary font-semibold">R$ 800 - R$ 1.500</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-border">
                        <span className="text-sm">Site Institucional</span>
                        <span className="text-primary font-semibold">R$ 1.500 - R$ 3.000</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-border">
                        <span className="text-sm">E-commerce</span>
                        <span className="text-primary font-semibold">R$ 3.000 - R$ 8.000</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-border">
                        <span className="text-sm">Portal Corporativo</span>
                        <span className="text-primary font-semibold">R$ 5.000 - R$ 15.000</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Site Personalizado</span>
                        <span className="text-primary font-semibold">Sob consulta</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-surface/30 p-4 rounded-lg border border-primary/20">
                    <h4 className="font-semibold text-primary mb-2">Incluso em todos os planos:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Design responsivo</li>
                      <li>• SEO básico otimizado</li>
                      <li>• Hospedagem por 1 ano</li>
                      <li>• Suporte técnico por 90 dias</li>
                      <li>• Treinamento de uso</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Systems Table */}
            <Card variant="hover" className="fade-in" style={{animationDelay: '0.2s'}}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-gradient-secondary flex items-center">
                    <Database className="w-6 h-6 mr-2" />
                    Desenvolvimento de Sistemas
                  </CardTitle>
                </div>
                <CardDescription>
                  Sistemas web robustos para automatizar e otimizar seus processos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border border-primary/30 rounded-lg overflow-hidden bg-surface/50">
                    <div className="bg-gradient-secondary text-primary-foreground px-4 py-2 text-sm font-medium">
                      Tipo de Sistema
                    </div>
                    <div className="p-4 space-y-3">
                      <div className="flex justify-between items-center pb-2 border-b border-border">
                        <span className="text-sm">Sistema de Gestão Básico</span>
                        <span className="text-primary font-semibold">R$ 5.000 - R$ 12.000</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-border">
                        <span className="text-sm">ERP Customizado</span>
                        <span className="text-primary font-semibold">R$ 15.000 - R$ 40.000</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-border">
                        <span className="text-sm">Sistema de Controle</span>
                        <span className="text-primary font-semibold">R$ 8.000 - R$ 20.000</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-border">
                        <span className="text-sm">Plataforma Web</span>
                        <span className="text-primary font-semibold">R$ 20.000 - R$ 60.000</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Sistema Empresarial</span>
                        <span className="text-primary font-semibold">Sob consulta</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-surface/30 p-4 rounded-lg border border-primary/20">
                    <h4 className="font-semibold text-primary mb-2">Incluso em todos os sistemas:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Análise de requisitos</li>
                      <li>• Banco de dados otimizado</li>
                      <li>• Interface moderna e intuitiva</li>
                      <li>• Relatórios personalizados</li>
                      <li>• Suporte técnico por 6 meses</li>
                      <li>• Treinamento completo da equipe</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 fade-in" style={{animationDelay: '0.4s'}}>
            <Card variant="glow" className="max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gradient-primary mb-4">
                  Pronto para começar seu projeto?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Entre em contato para uma consultoria gratuita e orçamento personalizado
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button variant="hero" onClick={() => scrollToSection('contact')}>
                    <Phone className="w-4 h-4 mr-2" />
                    Solicitar Orçamento
                  </Button>
                  <Button variant="outline" onClick={() => window.open('https://wa.me/5534991867874', '_blank')}>
                    <Zap className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold mb-6 text-gradient-primary">Projetos</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Alguns dos meus trabalhos mais recentes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} variant="hover" className="fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{project.title}</CardTitle>
                    <span className="text-xs px-3 py-1 rounded-full bg-gradient-primary text-primary-foreground">
                      {project.status}
                    </span>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs px-2 py-1 rounded bg-surface text-primary border border-primary/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" onClick={() => setSelectedProject(index)}>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ver Detalhes
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      <Dialog open={selectedProject !== null} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-surface border border-primary/30 shadow-shadow-primary">
          {selectedProject !== null && (
            <>
              <DialogHeader>
                <div className="flex items-center justify-between">
                  <DialogTitle className="text-2xl text-gradient-primary">{projects[selectedProject].title}</DialogTitle>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-3 py-1 rounded-full bg-gradient-primary text-primary-foreground">
                      {projects[selectedProject].status}
                    </span>
                  </div>
                </div>
                <DialogDescription className="text-muted-foreground">
                  {projects[selectedProject].description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6 mt-6">
                {/* Full Description */}
                <div>
                  <h4 className="text-lg font-semibold text-gradient-secondary mb-3">Sobre o Projeto</h4>
                  <p className="text-foreground leading-relaxed">{projects[selectedProject].fullDescription}</p>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-gradient-secondary mb-3">Tecnologias Utilizadas</h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[selectedProject].tech.map((tech, techIndex) => (
                      <span key={techIndex} className="text-sm px-3 py-1 rounded-full bg-surface text-primary border border-primary/30 glow-primary">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-lg font-semibold text-gradient-secondary mb-3">Funcionalidades Principais</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {projects[selectedProject].features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 rounded-full bg-gradient-primary mt-2 flex-shrink-0"></div>
                        <span className="text-foreground text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Challenges */}
                <div>
                  <h4 className="text-lg font-semibold text-gradient-secondary mb-3">Desafios & Soluções</h4>
                  <p className="text-foreground leading-relaxed">{projects[selectedProject].challenges}</p>
                </div>

                {/* Impact */}
                <div>
                  <h4 className="text-lg font-semibold text-gradient-secondary mb-3">Impacto & Resultados</h4>
                  <p className="text-foreground leading-relaxed">{projects[selectedProject].impact}</p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-4 border-t border-border">
                  <Button variant="primary" size="lg" onClick={() => scrollToSection('contact')}>
                    <Mail className="w-4 h-4 mr-2" />
                    Solicitar Orçamento
                  </Button>
                  <Button variant="outline" onClick={() => setSelectedProject(null)}>
                    <X className="w-4 h-4 mr-2" />
                    Fechar
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-surface/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold mb-6 text-gradient-secondary">Contato</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Vamos criar algo incrível juntos? Entre em contato!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card variant="glow" className="fade-in">
              <CardHeader>
                <CardTitle>Informações de Contato</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-primary rounded-full text-primary-foreground">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:marcosroberto@uberlandia.mg.gov.br" className="text-primary hover:text-primary-light transition-colors">
                      marcosroberto@uberlandia.mg.gov.br
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-primary rounded-full text-primary-foreground">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">Telefone</p>
                    <a href="tel:34991867874" className="text-primary hover:text-primary-light transition-colors">
                      (34) 99186-7874
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card variant="glow" className="fade-in">
              <CardHeader>
                <CardTitle>Redes Sociais</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="https://github.com/itsismarcos" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 mr-3" />
                    GitHub - itsismarcos
                  </a>
                </Button>
                
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="https://linkedin.com/in/itsismarcos" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5 mr-3" />
                    LinkedIn - itsismarcos
                  </a>
                </Button>
                
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="https://instagram.com/itsismarcos" target="_blank" rel="noopener noreferrer">
                    <Instagram className="w-5 h-5 mr-3" />
                    Instagram - itsismarcos
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border bg-surface/50">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-muted-foreground">
            © 2024 Marcos Roberto. Desenvolvido com 
            <span className="text-gradient-primary mx-1">💜</span>
            e tecnologia de ponta.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;