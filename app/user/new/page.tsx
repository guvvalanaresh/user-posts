import Form from "next/form";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function NewUser() {
  async function createUser(formData: FormData) {
    "use server";

    const email = formData.get("email") as string;
    const name = formData.get("name") as string;

    await prisma.user.create({
      data: {
        email,
        name,
      },
    });

    revalidatePath("/user");
    redirect("/user");
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Create New User</h1>
      <Form action={createUser} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-lg mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your user name"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-lg mb-2">
            Email
          </label>
          <input
            id="email"
            name="email"
            placeholder="Enter your email here..."
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600"
        >
          Create User
        </button>
      </Form>
    </div>
  );
}

// It is the page to create the new posts in the database