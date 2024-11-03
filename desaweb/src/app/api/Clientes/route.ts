import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Crear un nuevo usuario

export async function POST(request: Request) {
    const { name, apellido, genero,fecha_nacimiento ,estatus,usuario_creador,status_info } = await request.json();
    try {
      const cliente = await prisma.cliente.create({
        data: { name,apellido,genero,fecha_nacimiento,estatus,usuario_creador,status_info }
      });
      return NextResponse.json(cliente, { status: 201 });
    } catch (error) {
      return NextResponse.json({ error: 'Error al crear el Cliente' }, { status: 500 });
    }
  }
  
  // Actualizar un usuario existente
  export async function PUT(request: Request) {
    const { id, name, apellido, genero,fecha_nacimiento ,estatus,usuario_creador,status_info } = await request.json();
    try {
      const user = await prisma.user.update({
        where: { id: parseInt(id) },
        data: { name, apellido, genero,fecha_nacimiento ,estatus,usuario_creador,status_info }
      });
      return NextResponse.json(user);
    } catch (error) {
      return NextResponse.json({ error: 'Error al actualizar el usuario' }, { status: 500 });
    }
}