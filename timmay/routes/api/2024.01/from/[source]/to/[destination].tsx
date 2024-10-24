import { PageProps } from "$fresh/server.ts";
import {airtableS, notionS, dataS, webS, icsS, googleS, outlookS} from '@components/sources/mod.ts'
import {airtableD, notionD, icsD, googleD, outlookD} from '@components/dests/mod.ts'

const ProviderNotFound = (props:{name:string}) => <>
    <h1> Error: &gt; &gt; {props.name}</h1>
    <h3> &gt; &gt; Source  Not Found</h3>
</>

const SourceFormSection = (props:{name:string}) => {

    const NamedSourceInput = ()=>{
        switch(props.name){
            case 'airtable':
                return <airtableS.Source tableID={''} secret={''}/>
            case 'notion':
                return <notionS.Source />
            case 'data':
                return <dataS.Source tableID={''} secret={''}/>
            case 'google':
                return <googleS.Source tableID={''} secret={''}/>
            case 'outlook':
                return <outlookS.Source tableID={''} secret={''}/>
            case 'ics':
                return <icsS.Source tableID="" secret=""/>
            case 'web':
                return <webS.Source tableID="" secret=""/>
            default:
                return <ProviderNotFound name={props.name}/>
        }
        
    }
    return <section>
        <h1 class="text-4xl font-bold">{props.name}</h1>
        <NamedSourceInput/>
    </section>
}

const DestFormSection = (props:{name:string}) => {

    const NamedDestInput = ()=>{
        switch(props.name){
            case 'airtable':
                return <airtableD.Dest/>
            case 'notion':
                return <notionD.Dest />
            case 'google':
                return <googleD.Dest />
            case 'outlook':
                return <outlookD.Dest />
            case 'ics':
                return <icsD.Dest/>
            default:
                return <ProviderNotFound name={props.name}/>
        }        
    }

    return <section>
    <h1 class="text-4xl font-bold">{props.name}</h1>
    <NamedDestInput />
</section>
}

const Buttons = (props:{src:string,dest:string}) => {

    const srcFound = ['airtable','notion','data','google','outlook','ics'].includes(props.src)
    const destFound = ['airtable','notion','data','google','outlook','ics'].includes(props.dest)
    const disabled = !destFound || !srcFound

    return <div class="flex flex-row justify-center">
        <button 
            class="bg-blue-400 
                hover:bg-blue-700 
                text-white 
                font-bold 
                my-3
                mx-2
                py-2 
                px-4 
                rounded" 
            disabled={disabled}
            type="submit">
            Submit
        </button>
        <button 
            class="bg-blue-400 
                hover:bg-blue-700 
                text-white 
                font-bold 
                my-3
                mx-2 
                py-2 
                px-4
                rounded" 
            disabled={disabled}
            type="submit">
            Preview
        </button>

    </div>
    
}

/**
 * @todo: how to handle the secret...
 * Just plop it in the base64 encoded string in the search params?
 * Or do something more secure? AES encryption? ECDSA? etc.
 *  if opting for the latter, how to handle the key?
 *  the key is in the headers? and retained for a few minutes?
 *  maybe the key IS the JWT value, which is passed around in the headers/cookies?
 * @returns 
 */
export default function Home(props:PageProps) {
   const {source, destination} = props.params
   const src = source.toLowerCase()
   const dest = destination.toLowerCase()

    return (
    <>
      <div class="px-4 py-8 mx-auto bg-[#86efac]">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
            <h1 class="text-4xl font-bold my-2"> {src} → {dest} </h1>    
        </div>
      </div>

      <div class="px-4 py-8 mx-auto bg-slate-100">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
            <form method="post" action={''}> 
                <SourceFormSection name={src}/>
                <DestFormSection name={dest} />
                <Buttons {...{src, dest}} />
            </form>
        </div>
      </div>
    </>  
    
    
    );
  }
  