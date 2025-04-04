import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Task } from '@prisma/client';

@Injectable()
export class AppService {
	constructor(private prisma: PrismaService) { }

	async create(): Promise<Task> {
		const result = await this.prisma.task.create({
			data: {
				header: "New Task",
				description: "Description of new task",
				status: "undone",
			}
		});
		return result;
	}

	async find(query: string | undefined, status: "done" | "undone" | undefined): Promise<Task[]> {

		const where: any = {};

		if (query) {
			where.OR = [
				{ header: { contains: query, mode: 'insensitive' } },
				{ description: { contains: query, mode: 'insensitive' } },
			];
		}

		if (status !== undefined) {
			where.status = status;
		}

		return this.prisma.task.findMany({ where });
	}

	async update(id: string, data: { header?: string; description?: string; status?: "done" | "undone"; }) {
		if (!(data.header || data.description || data.status)) throw new BadRequestException('At least 1 property has to be changed.');

		return this.prisma.task.update({
			where: { id },
			data,
		});
	}



	async remove(id: string) {
		return this.prisma.task.delete({
			where: { id },
		});
	}
}