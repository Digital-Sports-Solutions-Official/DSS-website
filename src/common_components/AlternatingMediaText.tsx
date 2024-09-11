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
                <div className="entry">
                    <div className='row' style={{ flexDirection: (isEven(index) ? 'row' : 'row-reverse') }}>

                        <div className='column'>
                            {entry.href ? (
                                <a href={entry.href} target='_blank'>
                                    <img src={entry.imgURL} />
                                </a>
                            ) : (
                                <img src={entry.imgURL} />
                            )}

                            {/* TODO make title a label */}


                        </div>

                        <p>{entry.description}</p>
                    </div>
                    <div className='title' style={getTitlePosition(index)}>
                        <h3>{entry.title}</h3>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AlternatingMediaText;
