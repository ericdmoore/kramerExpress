import { load } from '@std/dotenv'

export const main = async () => {
    console.log('Hello World')
    // const dotted = await load({export: true})
    await load({export: true})
    const notionSecret = await Deno.env.get('NOTION')
    console.log(notionSecret?.slice(0, 2))
}

export default main