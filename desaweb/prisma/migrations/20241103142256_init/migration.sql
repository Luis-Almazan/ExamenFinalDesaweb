-- CreateTable
CREATE TABLE "cliente" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "genero" INTEGER NOT NULL,
    "fecha_nacimiento" TEXT NOT NULL,
    "estatus" INTEGER NOT NULL,
    "fecha_creacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fecha_actualizacion" TIMESTAMP(3) NOT NULL,
    "usuario_creador" TEXT NOT NULL,
    "status_info" TEXT NOT NULL,

    CONSTRAINT "cliente_pkey" PRIMARY KEY ("id")
);
