import { Heart, Mail, Phone, MapPin, Coffee, Music, Camera, Book, Star, Award, Calendar, User, Gamepad2, Plane } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"


export default function CVNovio() {
  const habilidades = [
    "Escuchar activamente",
    "Cocinar pasta decente",
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
    { icon: <Music className="w-4 h-4" />, nombre: "Música indie" },
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
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center text-white text-4xl font-bold">
            <img src="/yo.jpeg" alt="Víctor" className="w-full h-full object-cover rounded-full" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Víctor</h1>
            <p className="text-xl text-gray-600 mb-4">Soltero pero no entero</p>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>Madrid, España</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>27 años</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span>Soltero</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sobre mí */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-rose-500" />
              Sobre mí
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">
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
                <Star className="w-5 h-5 text-yellow-500" />
                Habilidades como Novio
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {habilidades.map((habilidad, index) => (
                  <Badge key={index} variant="secondary" className="bg-rose-100 text-rose-700 hover:bg-rose-200">
                    {habilidad}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Hobbies */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Music className="w-5 h-5 text-blue-500" />
                Hobbies e Intereses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {hobbies.map((hobby, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="text-gray-500">{hobby.icon}</div>
                    <span className="text-gray-700">{hobby.nombre}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Experiencia */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5 text-green-500" />
              Experiencia en Relaciones
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {experiencia.map((exp, index) => (
                <div key={index} className="border-l-2 border-rose-200 pl-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-medium text-rose-600">{exp.periodo}</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{exp.titulo}</h3>
                  <p className="text-gray-600 text-sm">{exp.descripcion}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Lo que busco */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-pink-500" />
              Lo que busco
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">En una pareja:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Comunicación honesta y abierta</li>
                  <li>• Sentido del humor</li>
                  <li>• Ambición y metas propias</li>
                  <li>• Amor por las aventuras</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Tipo de relación:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Seria y comprometida</li>
                  <li>• Basada en respeto mutuo</li>
                  <li>• Con espacio personal</li>
                  <li>• Orientada al crecimiento conjunto</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contacto */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-500" />
              ¿Interesada? Contactemos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center">
              <a href="https://twitter.com/messages/compose?recipient_id=4827061193" target="_blank" rel="noopener noreferrer">
                <Button className="bg-rose-500 hover:bg-rose-600 text-white">
                  <Mail className="w-4 h-4 mr-2" />
                  Enviar mensaje
                </Button>
              </a>
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">
              Respondo en menos de 24 horas • Primera cita: café y conversación
            </p>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-sm text-gray-400 py-4">
          <p>CV Novio v2.0 • Actualizado en Enero 2025 • Referencias disponibles bajo petición</p>
        </div>
      </div>
    </div>
  )
}
