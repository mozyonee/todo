-- CreateTable
CREATE TABLE "Task" (
    "id" TEXT NOT NULL,
    "header" TEXT NOT NULL DEFAULT 'New Task',
    "description" TEXT NOT NULL DEFAULT 'Description of new task',
    "status" TEXT NOT NULL DEFAULT 'undone',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);
