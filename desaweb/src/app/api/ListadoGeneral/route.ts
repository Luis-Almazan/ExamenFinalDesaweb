import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Función para obtener todos los usuarios
async function getAllUsers() {
    try {
      const cliente = await prisma.cliente.findMany({
        orderBy: [
            { fecha_creacion: 'desc' }, // Ordenar por fecha_creacion (descendente)
            { apellido: 'asc' } 
            ],         // Luego ordenar por apellido (ascendente)
      });
      return NextResponse.json(cliente);
    } catch (error) {
      return NextResponse.json({ error: 'Error al obtener los Clientes' }, { status: 500 });
    }
  }
  
  // Función para obtener un usuario por ID
  async function getUserById(id: number) {
    try {
      const cliente = await prisma.cliente.findUnique({
        where: { id },
      });
  
      if (!cliente) {
        return NextResponse.json({ error: 'cliente no encontrado' }, { status: 404 });
      }
  
      return NextResponse.json(cliente);
    } catch (error) {
      return NextResponse.json({ error: 'Error al obtener el Cliente' }, { status: 500 });
    }
  }
  
  // Handler principal para la petición GET
  export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
  
    if (id) {
      return getUserById(parseInt(id));
    } else {
      return getAllUsers();
    }
  }
  
