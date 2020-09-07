import React, {useState} from 'react'

export default function TextContent({title, text, visibleCharacters, expandable, expanded}) {
  const [textExpanded, setTextExpanded] = useState(expanded);
  const splitText = `${text.substring(0, visibleCharacters)}`

  return (
    <section className="text-content">
      <div className="container">
        <h1>{title}</h1>
        {expandable ? (!textExpanded ? (<p>{splitText}</p>) : (<p>{text}</p>)) : (<p>{text}</p>)}
        {!textExpanded ? (
          <button className="readMoreLessBtn" onClick={() => setTextExpanded(!textExpanded)}>Read more</button>
          ) : (
            <button className="readMoreLessBtn" onClick={() => setTextExpanded(!textExpanded)}>Read Less</button>
          )}
      </div>
    </section>
  )
}
