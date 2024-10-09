/* Noah Klein */

import { CSSProperties } from "react";

import './AlternatingMediaText.css'

export interface MediaTextEntry {
    title: string;
    href?: string;
    imgURL: string;
    description: string;
}

interface AlternatingMediaTextProps {
    entries: Array<MediaTextEntry>;
}

const AlternatingMediaText = ({ entries }: AlternatingMediaTextProps) => {
    const isEven = (x: number): boolean => {
        return (x % 2) === 0;
    }


    const getTitlePosition = (x: number): CSSProperties => {
        return isEven(x) ? {} : { marginLeft: 'auto', textAlign: 'end' };
    }

    return (
        <div className='AlternatingMediaText column'>
            {Array.from(entries.entries()).map(([index, entry]) => (
                <a className="entry" href={entry.href} target='_blank'>
                    <div className='' id="entry" style={{ flexDirection: (isEven(index) ? 'row' : 'row-reverse') }}>
                        <div className='title' style={getTitlePosition(index)}>
                            <img src={entry.imgURL} />
                            <h3>{entry.title}</h3>
                        </div>
                        <p>
                            {entry.description.split('\n').map((line, index) => (
                                <span key={index}>
                                    {line}
                                    <br />
                                </span>
                            ))}
                        </p>
                    </div>
                </a>
            ))
            }
        </div >
    )
}

export default AlternatingMediaText;
