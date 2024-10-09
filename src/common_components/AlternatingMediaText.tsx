/* Noah Klein */

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

    return (
        <div className='AlternatingMediaText column'>
            {Array.from(entries.entries()).map(([index, entry]) => (
                <div className={`entry ${isEven(index) ? '' : 'odd'}`} key={index}>
                    <a className='title' href={entry.href} target='_blank'>
                        <img src={entry.imgURL} draggable="false" />
                        <h3>{entry.title}</h3>
                    </a>

                    <div>
                        {entry.description.split('\n').map((line, index) => (
                            <p key={index}>
                                {line}
                            </p>
                        ))}
                    </div>
                </div>
            ))
            }
        </div >
    )
}

export default AlternatingMediaText;
