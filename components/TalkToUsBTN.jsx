import { Button } from "@/components/ui/button"
import Link from "next/link"

 import {CiPhone} from "react-icons/ci"
function TalkToUsBTN({className}) {
  return (
      <Link href={'/contact'}    >
      
      <Button className={`font-thin tracking-wider shadow-black shadow-sm ${className}`}><CiPhone/>Talk To US</Button>
      </Link>
  )
}

export default TalkToUsBTN
