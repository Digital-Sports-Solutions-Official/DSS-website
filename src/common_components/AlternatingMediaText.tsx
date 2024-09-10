/* Noah Klein */

import { CSSProperties } from "react";

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
        return isEven(x) ? { position: 'absolute', top: '100%', left: 0 } : { position: 'absolute', top: '100%', right: 0, textAlign: 'end' }

    }

    return (
        <div className='column'>
            {Array.from(entries.entries()).map(([index, entry]) => (
                <div className='row entry' style={{ flexDirection: (isEven(index) ? 'row' : 'row-reverse') }}>

                    <div className='column' style={{ position: 'relative' }}>
                        {entry.href ? (
                            <a href={entry.href} target='_blank'>
                                <img src={entry.imgURL} />
                            </a>
                        ) : (
                            <img src={entry.imgURL} />
                        )}

                        {/* TODO make title a label */}

                        <div className='title' style={getTitlePosition(index)}>
                            <h3>{entry.title}</h3>
                        </div>
                    </div>

                    <p>{entry.description}</p>
                </div>
            ))}
        </div>
    )
}

export default AlternatingMediaText;
