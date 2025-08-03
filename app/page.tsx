import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  ClipboardCheck,
  FileText,
  Handshake,
  Instagram,
  Lightbulb,
  Mail,
  Menu,
  Paintbrush,
  Phone,
  Search,
  Shield,
  Truck,
  Wrench,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FMPremiumCarsLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-[#999999] bg-black sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div>
                <Image
                  src="/logo.png"
                  alt="Logo FM Premium Cars"
                  width={120}
                  height={120}
                />
                {/* <span className="text-2xl font-bold text-white tracking-wider font-racing">
                  FM
                </span>
                <p className="text-xs text-[#CCCCCC]  tracking-widest">
                  RACING IMPORTS
                </p> */}
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="#proceso"
                className="text-[#CCCCCC] hover:text-white transition-colors  tracking-wide text-sm font-medium"
              >
                Proceso
              </Link>
              <Link
                href="#importaciones"
                className="text-[#CCCCCC] hover:text-white transition-colors  tracking-wide text-sm font-medium"
              >
                Importaciones
              </Link>
              <Link
                href="#revision"
                className="text-[#CCCCCC] hover:text-white transition-colors  tracking-wide text-sm font-medium"
              >
                Revisión
              </Link>
              <Link
                href="#transporte"
                className="text-[#CCCCCC] hover:text-white transition-colors  tracking-wide text-sm font-medium"
              >
                Transporte
              </Link>
              <Link
                href="#contacto"
                className="text-[#CCCCCC] hover:text-white transition-colors  tracking-wide text-sm font-medium"
              >
                Contacto
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSeJ6KOuRJ1BTxZPfj7kUfAuWg7cPz5FRJMK6zynTCTVqS8BoQ/viewform?fbclid=PAQ0xDSwL8kqNleHRuA2FlbQIxMQABpxRImY7jglXjucWsm4W0YNv7bfoXXZzk8n7u_zrxtRGKohhdZbCwQeHiKnKW_aem_l5Uf-LG7zGaNHoVQhfm8uQ"
                target="_blank"
              >
                <Button className="bg-[#D50000] hover:bg-[#B71C1C] text-white border-0  tracking-wide font-bold">
                  Presupuesto
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-white"
              >
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a1a1a] to-black"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#D50000] transform skew-x-12 translate-x-1/2"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-4xl font-racing text-white leading-tight  tracking-tight">
                  IMPORTACIÓN DE COCHES
                  <span className="text-[#D50000] block mt-4">A LA CARTA</span>
                </h1>
                <p className="text-xl text-[#CCCCCC] font-bold  tracking-wide font-racing">
                  Exclusividad premium al precio justo
                </p>
                <p className="text-lg text-white leading-relaxed">
                  Importamos tu coche ideal desde Alemania con total garantía y
                  transparencia. Proceso completo de verificación y entrega
                  legal en España.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 bg-[#D50000] hover:bg-[#B71C1C] text-white border-0  tracking-wide font-bold"
                >
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeJ6KOuRJ1BTxZPfj7kUfAuWg7cPz5FRJMK6zynTCTVqS8BoQ/viewform?fbclid=PAQ0xDSwL8kqNleHRuA2FlbQIxMQABpxRImY7jglXjucWsm4W0YNv7bfoXXZzk8n7u_zrxtRGKohhdZbCwQeHiKnKW_aem_l5Uf-LG7zGaNHoVQhfm8uQ"
                    target="_blank"
                  >
                    SOLICITÁ TU PRESUPUESTO
                  </a>
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6 bg-transparent border-[#CCCCCC] text-white hover:bg-[#CCCCCC] hover:text-black  tracking-wide font-bold"
                >
                  <Link href="#proceso">VER PROCESO</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/car1.png"
                alt="Coche deportivo importado desde Alemania"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ¿Cómo funciona? - Proceso de importación */}
      <section id="proceso" className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge
              variant="secondary"
              className="w-fit mx-auto bg-[#D50000] text-white border-0  tracking-wider font-bold"
            >
              Proceso
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-racing text-white  tracking-tight">
              ¿Cómo funciona? – Proceso de importación
            </h2>
            <p className="text-xl text-[#CCCCCC] max-w-3xl mx-auto  tracking-wide">
              Un proceso simple y transparente en tres pasos para conseguir tu
              coche ideal
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow relative bg-[#1a1a1a] text-white">
              <div className="absolute -top-4 left-6 w-8 h-8 bg-[#D50000] text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <CardHeader className="pt-8">
                <div className="w-12 h-12 bg-[#D50000] rounded-sm flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl  tracking-wide font-bold font-racing">
                  Búsqueda personalizada
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-[#CCCCCC]  tracking-wide">
                  Te ofrecemos diferentes opciones ajustadas a tus preferencias
                  y presupuesto. Vos elegís la unidad ideal.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow relative bg-[#1a1a1a] text-white">
              <div className="absolute -top-4 left-6 w-8 h-8 bg-[#D50000] text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <CardHeader className="pt-8">
                <div className="w-12 h-12 bg-[#D50000] rounded-sm flex items-center justify-center mb-4">
                  <Handshake className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl  tracking-wide font-bold font-racing">
                  Contacto con el concesionario
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-[#CCCCCC]  tracking-wide">
                  Verificamos que el coche esté en perfectas condiciones y toda
                  la documentación en regla.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow relative bg-[#1a1a1a] text-white">
              <div className="absolute -top-4 left-6 w-8 h-8 bg-[#D50000] text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <CardHeader className="pt-8">
                <div className="w-12 h-12 bg-[#D50000] rounded-sm flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl  tracking-wide font-bold font-racing">
                  Formalización del contrato
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-[#CCCCCC]  tracking-wide">
                  Te damos la cotización final y, con el pago del servicio,
                  iniciamos el proceso de importación.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nuestras Importaciones - Photo Gallery */}
      <section id="importaciones" className="py-20 bg-[#1a1a1a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge
              variant="secondary"
              className="w-fit mx-auto bg-[#D50000] text-white border-0  tracking-wider font-bold"
            >
              Galería
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-racing text-white  tracking-tight">
              Nuestras importaciones
            </h2>
            <p className="text-xl text-[#CCCCCC]  tracking-wide">
              Vehículos premium importados con éxito desde Alemania
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src="/imp1.png"
                alt="BMW M3 importado"
                width={600}
                height={400}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-racing text-lg ">Audi Q8</h3>
                  <p className="text-[#CCCCCC] text-sm ">2021 • Alemania</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src="/imp2.png"
                alt="Mercedes AMG GT importado"
                width={600}
                height={400}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-racing text-lg ">Golf</h3>
                  <p className="text-[#CCCCCC] text-sm ">2010 • Alemania</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src="/imp3.png"
                alt="Audi RS6 importado"
                width={600}
                height={400}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-racing text-lg ">
                    Mercedes Benz GLC 300e
                  </h3>
                  <p className="text-[#CCCCCC] text-sm ">2020 • Alemania</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src="/imp4.png"
                alt="Porsche 911 GT3 importado"
                width={600}
                height={400}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-racing text-lg ">BMW 116i</h3>
                  <p className="text-[#CCCCCC] text-sm ">2009 • Alemania</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <Image
                src="/imp5.png"
                alt="BMW M4 Competition importado"
                width={600}
                height={400}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-racing text-lg ">Golf Variant</h3>
                  <p className="text-[#CCCCCC] text-sm ">2011 • Alemania</p>
                </div>
              </div>
            </div>

            {/*             <div className="relative group overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Mercedes C63 AMG importado"
                width={600}
                height={400}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-racing text-lg ">Mercedes C63 AMG</h3>
                  <p className="text-[#CCCCCC] text-sm ">2022 • Alemania</p>
                </div>
              </div>
            </div> */}
          </div>

          {/*           <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-[#D50000] hover:bg-[#B71C1C] text-white border-0  tracking-wide font-bold"
            >
              Ver más importaciones
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div> */}
        </div>
      </section>

      {/* Revisión presencial en Alemania */}
      <section id="revision" className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge
              variant="secondary"
              className="w-fit mx-auto bg-[#D50000] text-white border-0  tracking-wider font-bold"
            >
              Verificación
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-racing text-white  tracking-tight">
              Revisión presencial en Alemania
            </h2>
            <p className="text-xl text-[#CCCCCC]  tracking-wide">
              Inspección completa y profesional antes de la compra
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="flex items-start space-x-4 bg-[#1a1a1a] p-6 rounded-lg shadow-md">
              <div className="w-10 h-10 bg-[#D50000] rounded-sm flex items-center justify-center flex-shrink-0">
                <Paintbrush className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2  tracking-wide font-racing">
                  Medición de espesor de pintura
                </h3>
                <p className="text-sm text-[#CCCCCC]  tracking-wide">
                  Verificación completa del estado de la carrocería
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-[#1a1a1a] p-6 rounded-lg shadow-md">
              <div className="w-10 h-10 bg-[#D50000] rounded-sm flex items-center justify-center flex-shrink-0">
                <Wrench className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2  tracking-wide font-racing">
                  Revisión de bajos y motor
                </h3>
                <p className="text-sm text-[#CCCCCC]  tracking-wide">
                  Control de óxidos, fugas y estado general
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-[#1a1a1a] p-6 rounded-lg shadow-md">
              <div className="w-10 h-10 bg-[#D50000] rounded-sm flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2  tracking-wide font-racing">
                  Verificación de faros y tornillería
                </h3>
                <p className="text-sm text-[#CCCCCC]  tracking-wide">
                  Inspección de fecha de fabricación y componentes
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-[#1a1a1a] p-6 rounded-lg shadow-md">
              <div className="w-10 h-10 bg-[#D50000] rounded-sm flex items-center justify-center flex-shrink-0">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2  tracking-wide font-racing">
                  Diagnóstico electrónico
                </h3>
                <p className="text-sm text-[#CCCCCC]  tracking-wide">
                  Verificación de kilometraje y sistemas
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-[#1a1a1a] p-6 rounded-lg shadow-md">
              <div className="w-10 h-10 bg-[#D50000] rounded-sm flex items-center justify-center flex-shrink-0">
                <ClipboardCheck className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2  tracking-wide font-racing">
                  Historial de mantenimiento
                </h3>
                <p className="text-sm text-[#CCCCCC]  tracking-wide">
                  Revisión completa de servicios y ITV
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-[#1a1a1a] p-6 rounded-lg shadow-md">
              <div className="w-10 h-10 bg-[#D50000] rounded-sm flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2  tracking-wide font-racing">
                  Documentación completa
                </h3>
                <p className="text-sm text-[#CCCCCC]  tracking-wide">
                  Verificación de toda la papelería legal
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transporte y entrega en España */}
      <section id="transporte" className="py-20 bg-[#1a1a1a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge
                variant="secondary"
                className="w-fit bg-[#D50000] text-white border-0  tracking-wider font-bold"
              >
                Entrega
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-racing text-white  tracking-tight">
                Transporte y entrega en España
              </h2>
              <p className="text-xl text-[#CCCCCC] leading-relaxed  tracking-wide">
                Nos ocupamos de todo. Vos solo disfrutás tu coche importado,
                legal y verificado.
              </p>
              <p className="text-lg text-[#CCCCCC]  tracking-wide">
                Nuestro servicio incluye el acompañamiento completo durante todo
                el proceso de matriculación y entrega en España. Manejamos todos
                los trámites legales para que recibas tu vehículo completamente
                legalizado y listo para circular.
              </p>
              <div className="flex items-center space-x-4 p-4 bg-black rounded-lg">
                <div className="w-12 h-12 bg-[#D50000] rounded-sm flex items-center justify-center">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white  tracking-wide font-racing">
                    Transporte seguro
                  </h3>
                  <p className="text-[#CCCCCC]  tracking-wide">
                    Entrega puerta a puerta con seguro completo
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/car2.png"
                alt="Transporte de coches desde Alemania"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Formas de pago */}
      {/*       <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge
              variant="secondary"
              className="w-fit mx-auto bg-[#D50000] text-white border-0  tracking-wider font-bold"
            >
              Pago
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-racing text-white  tracking-tight">Formas de pago</h2>
            <p className="text-xl text-[#CCCCCC]  tracking-wide">Modalidad de pago flexible y segura</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 border-[#D50000] hover:border-[#B71C1C] transition-colors bg-[#1a1a1a] text-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#D50000] rounded-sm flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-[#D50000]  tracking-wide font-bold font-racing">
                  70%
                </CardTitle>
                <CardDescription className="text-lg  tracking-wide">Al reservar en Alemania</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-[#CCCCCC]  tracking-wide">
                  Abono inicial para asegurar la reserva y comenzar el proceso de verificación
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#D50000] hover:border-[#B71C1C] transition-colors bg-[#1a1a1a] text-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#D50000] rounded-sm flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-[#D50000]  tracking-wide font-bold font-racing">
                  30%
                </CardTitle>
                <CardDescription className="text-lg  tracking-wide">Al recibirlo en España</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-[#CCCCCC]  tracking-wide">
                  Pago final al momento de la entrega del vehículo matriculado
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <div className="bg-[#1a1a1a] border border-[#D50000] rounded-lg p-6">
              <p className="text-sm text-[#D50000] text-center  tracking-wide">
                <strong>Nota legal:</strong> El coste del vehículo se abona por transferencia inmediata o en efectivo
                (presencial en Alemania).
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Contacto directo */}
      <section id="contacto" className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge
              variant="secondary"
              className="w-fit mx-auto bg-[#D50000] text-white border-0  tracking-wider font-bold"
            >
              Contacto
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-racing text-white  tracking-tight">
              Contacto directo
            </h2>
            <p className="text-xl text-[#CCCCCC]  tracking-wide">
              Estamos disponibles para resolver todas tus dudas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center bg-black text-white">
              <CardHeader>
                <div className="w-16 h-16 bg-[#D50000] rounded-sm flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <CardTitle className=" tracking-wide font-bold font-racing">
                  Teléfono
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-white mb-2">
                  641-774-061
                </p>
                <p className="text-[#CCCCCC]  tracking-wide">
                  Llamanos directamente
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center bg-black text-white">
              <CardHeader>
                <div className="w-16 h-16 bg-[#D50000] rounded-sm flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <CardTitle className=" tracking-wide font-bold font-racing">
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-white mb-2">
                  info@fmpremiumcars.com
                </p>
                <p className="text-[#CCCCCC]  tracking-wide">
                  Escribinos tu consulta
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center bg-black text-white">
              <CardHeader>
                <div className="w-16 h-16 bg-[#D50000] rounded-sm flex items-center justify-center mx-auto mb-4">
                  <Instagram className="w-8 h-8 text-white" />
                </div>
                <CardTitle className=" tracking-wide font-bold font-racing">
                  Instagram
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-white mb-2">
                  @fm.premiumcars
                </p>
                <p className="text-[#CCCCCC]  tracking-wide">
                  Seguinos en redes
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Formulario de contacto */}
      <section id="formulario" className="py-20 bg-[#1a1a1a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl sm:text-4xl font-racing text-white  tracking-tight">
              ¿Querés que te contactemos?
            </h2>
            <p className="text-xl text-[#CCCCCC]  tracking-wide">
              Completá el siguiente formulario y uno de nuestros expertos se
              pondrá en contacto con vos para asesorarte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6 bg-[#D50000] text-white border-0  tracking-wide font-bold"
                asChild
              >
                <Link
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeJ6KOuRJ1BTxZPfj7kUfAuWg7cPz5FRJMK6zynTCTVqS8BoQ/viewform?fbclid=PAQ0xDSwL8kqNleHRuA2FlbQIxMQABpxRImY7jglXjucWsm4W0YNv7bfoXXZzk8n7u_zrxtRGKohhdZbCwQeHiKnKW_aem_l5Uf-LG7zGaNHoVQhfm8uQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ir al formulario
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-[#CCCCCC] text-white hover:bg-[#CCCCCC] hover:text-black  tracking-wide font-bold bg-transparent"
              >
                <Link href="tel:641774061">Llamar ahora: 641-774-061</Link>
              </Button>
            </div>
            <p className="text-sm text-[#CCCCCC]  tracking-wide">
              Respuesta garantizada en menos de 24 horas • Asesoramiento
              gratuito
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-[#999999] text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Image
                  src="/logo.png"
                  alt="Logo FM Premium Cars"
                  width={120}
                  height={120}
                />
              </div>
              <p className="text-[#CCCCCC]  tracking-wide">
                Especialistas en importación de vehículos premium desde Alemania
                con garantía total.
              </p>
            </div>
            <div></div>

            <div>
              <h3 className="font-semibold mb-4  tracking-wide font-racing">
                Servicios
              </h3>
              <ul className="space-y-2 text-[#CCCCCC]  tracking-wide">
                <li>Búsqueda personalizada</li>
                <li>Revisión en Alemania</li>
                <li>Transporte seguro</li>
                <li>Matriculación España</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4  tracking-wide font-racing">
                Contacto
              </h3>
              <ul className="space-y-2 text-[#CCCCCC]  tracking-wide">
                <li>📞 641-774-061</li>
                <li>✉️ info@fmpremiumcars.com</li>
                <li>📱 @fm.premiumcars</li>
              </ul>
            </div>

            {/*             <div>
              <h3 className="font-semibold mb-4  tracking-wide font-racing">
                Legal
              </h3>
              <ul className="space-y-2 text-[#CCCCCC]  tracking-wide">
                <li>Términos y condiciones</li>
                <li>Política de privacidad</li>
                <li>Aviso legal</li>
              </ul>
            </div> */}
          </div>

          <div className="border-t border-[#999999] mt-12 pt-8 text-center text-[#CCCCCC]  tracking-wide">
            <p>
              &copy; {new Date().getFullYear()} FM Premium Cars. Todos los
              derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
