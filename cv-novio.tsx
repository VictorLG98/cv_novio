"use client"

import { Heart, Mail, MapPin, Music, Camera, Book, Star, Award, Calendar, User, Gamepad2, Plane } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"


export default function CVNovio() {
  const [password, setPassword] = useState("")
  const [isAuthorized, setIsAuthorized] = useState(false)

  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-center">Acceso</CardTitle>
          </CardHeader>
          <CardContent>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault()
                if (password === "pablito9000") {
                  setIsAuthorized(true)
                }
              }}
            >
              <div>
                <label className="block text-sm mb-1">Contraseña</label>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Introduce la contraseña"
                />
              </div>
              <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">Entrar</Button>
              {password && password !== "pablito9000" && (
                <p className="text-sm text-red-600">Contraseña incorrecta</p>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }
  const habilidades = [
    "Escuchar activamente",
    "Cocinar riquísimo",
    "Dar abrazos de calidad",
    "Recordar fechas importantes",
    "Hacer reír en momentos difíciles",
    "Planificar citas creativas",
    "Compartir Netflix sin spoilers",
    "Dar masajes relajantes",
  ]

  const hobbies = [
    { icon: <Gamepad2 className="w-4 h-4" />, nombre: "Videojuegos" },
    { icon: <Plane className="w-4 h-4" />, nombre: "Viajes" },
    { icon: <Music className="w-4 h-4" />, nombre: "Música" },
    { icon: <Camera className="w-4 h-4" />, nombre: "Fotografía" },
    { icon: <Book className="w-4 h-4" />, nombre: "Lectura" },
  ]
  

  const experiencia = [
    {
      periodo: "2021 - 2023",
      titulo: "Novio Comprometido",
      descripcion:
        "Relación seria con excelentes referencias. Especializado en comunicación efectiva y resolución de conflictos.",
    },
    {
      periodo: "1998 - 2021",
      titulo: "Soltero Profesional",
      descripcion:
        "Período de crecimiento personal y autodescubrimiento. Desarrollé habilidades culinarias y de cuidado personal.",
    },
  ]

  
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="max-w-5xl mx-auto p-4 md:p-10 grid gap-8 md:grid-cols-[320px_1fr]">
        {/* Sidebar */}
        <aside className="space-y-6 md:sticky md:top-8 self-start">
          <Card>
            <CardContent className="pt-6">
              <div className="w-36 h-36 mx-auto rounded-full overflow-hidden ring-4 ring-emerald-200">
                <img src="/yo.jpeg" alt="Víctor" className="w-full h-full object-cover" />
              </div>
              <div className="text-center mt-4">
                <h1 className="text-2xl font-bold text-slate-800">Víctor</h1>
              </div>
              <div className="mt-4 grid grid-cols-1 gap-2 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  <span>Madrid, España</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-emerald-600" />
                  <span>27 años</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-emerald-600" />
                  <span>Soltero</span>
                </div>
              </div>
              <div className="mt-6 flex justify-center">
                <a href="https://twitter.com/messages/compose?recipient_id=1914696909924564992" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                    <Mail className="w-4 h-4 mr-2" />
                    Enviar mensaje
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Music className="w-5 h-5 text-teal-600" />
                Hobbies e Intereses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {hobbies.map((hobby, index) => (
                  <Badge key={index} variant="secondary" className="bg-emerald-100 text-emerald-800">
                    <span className="mr-1 align-middle">{hobby.icon}</span>
                    {hobby.nombre}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </aside>

        {/* Main content */}
        <main className="space-y-8">
          {/* Sobre mí */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-emerald-600" />
                Sobre mí
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 leading-relaxed">
                Soy una persona empática, divertida y comprometida buscando una conexión genuina. Me encanta cocinar
                juntos los domingos, explorar nuevos lugares y tener conversaciones profundas hasta altas horas. Creo en
                el amor como un equipo donde ambos crecemos juntos.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Habilidades */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-teal-600" />
                  Habilidades como Novio
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {habilidades.map((habilidad, index) => (
                    <Badge key={index} variant="secondary" className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
                      {habilidad}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Datos rápidos */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-emerald-600" />
                  Experiencia en Relaciones
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {experiencia.map((exp, index) => (
                    <div key={index} className="border-l-2 border-emerald-200 pl-4">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-medium text-emerald-700">{exp.periodo}</span>
                      </div>
                      <h3 className="font-semibold text-slate-800 mb-1">{exp.titulo}</h3>
                      <p className="text-slate-600 text-sm">{exp.descripcion}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Lo que busco */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-teal-600" />
                Lo que busco
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">En una pareja:</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Comunicación honesta y abierta</li>
                    <li>• Sentido del humor</li>
                    <li>• Ambición y metas propias</li>
                    <li>• Amor por las aventuras</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Tipo de relación:</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Seria y comprometida</li>
                    <li>• Basada en respeto mutuo</li>
                    <li>• Con espacio personal</li>
                    <li>• Orientada al crecimiento conjunto</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center text-xs text-slate-500 py-2">
            <p>Actualizado en Septiembre de 2025 · Hecho con cariño</p>
          </div>
        </main>
      </div>
    </div>
  )
}
