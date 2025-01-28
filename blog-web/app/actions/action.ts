'use server'

export async function createPost (formData: FormData){
    const title = formData.get('title')?.toString()
    const content = formData.get('content')?.toString()
    console.log(title)
}