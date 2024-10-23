import React from 'react'
import { Fira_Sans } from '@next/font/google';



const firaSans = Fira_Sans({
    subsets: ['latin'],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

// Export font variables
export const fontVariables = {

    firaSans: firaSans.className,
};


export default function fonts() {
    return (
        <div>

        </div>
    )
}
