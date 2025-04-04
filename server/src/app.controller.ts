import { Controller, Post, Get, Patch, Delete, Body, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Task } from '@prisma/client';

@Controller("tasks")
export class AppController {
	constructor(private readonly appService: AppService) { }
	@Post()
	create(): Promise<Task> {
		return this.appService.create();
	}

	@Get()
	find(@Query('query') query: string | undefined, @Query('status') status: "done" | "undone" | undefined): Promise<Task[]> {
		return this.appService.find(query, status);
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() body: { header?: string; description?: string; status?: "done" | "undone"; }) {
		return this.appService.update(id, body);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.appService.remove(id);
	}
}


