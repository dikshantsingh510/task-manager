import { NextResponse } from "next/server";
import connectDB from "@/lib/mongoose";
import Task from "@/models/Task";

export async function GET(req) {
  try {
    const query = req.url.split("=")[1];
    await connectDB();
    let task;
    if (query) {
      task = await Task.find({ status: query });
    } else {
      task = await Task.find({});
    }
    return new NextResponse(JSON.stringify(task), { status: 200 });
  } catch (error) {
    return new NextResponse(`Error in fetching data ${error}`, { status: 500 });
  }
}

export async function POST(req) {
  try {
    //? Autometically convert the request body to JSON
    const body = await req.json();
    //? Get the title and description form the frontend
    const { title, description } = body;

    await connectDB();
    //? creating a new task
    const newTask = new Task({ title, description });

    //? saving the task to the database
    await newTask.save();
    //? return the newly created task
    return new NextResponse(
      JSON.stringify({ message: "Task is created", task: newTask }),
      { status: 201 }
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: `Error in creating task`, error }),
      { status: 500 }
    );
  }
}

export async function PATCH(req) {
  try {
    const body = await req.json();
    const { _id, title, description, status } = body;

    if (!_id || !title || !description || !status) {
      return new NextResponse(JSON.stringify({ message: "Invalid request" }), {
        status: 400,
      });
    }
    await connectDB();

    //*this line of code finds a task by its ID and updates its title, description, and status fields. The { new: true } option ensures that the updated task is returned.

    const task = await Task.findByIdAndUpdate(
      _id,
      { title, description, status },
      { new: true }
    );
    //? return the updated task
    return new NextResponse(
      JSON.stringify({ message: "Task is updated successfully", task }),
      { status: 200 }
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: `Error in updating task`, error }),
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  try {
    const query = req.url.split("=")[1];
    await connectDB();
    if (query) {
      await Task.deleteMany();
    } else {
      //? this line of code finds a task by its ID and deletes it.
      const { _id } = await req.json();
      if (!_id) {
        return new NextResponse(
          JSON.stringify({ message: "Invalid request" }),
          {
            status: 400,
          }
        );
      }
      await Task.findByIdAndDelete(_id);
    }

    //? return a success message
    return new NextResponse(
      JSON.stringify({ message: "Task deleted successfully!" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Error in deleting task", error }),
      { status: 500 }
    );
  }
}
