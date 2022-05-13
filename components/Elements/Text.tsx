export default function Text() {
  return (
    <div tw="prose">
      <h1>Testing display of HTML elements</h1>
      <p>
        This page contains a bunch of HTML Elements and text. You can copy the
        source code and use it test out various CSS Properties. For testing
        purposes, you may use{' '}
        <a href="css-linking#internal">
          <dfn>internal styles</dfn>
        </a>
        . Recall that these CSS rules are placed in between the{' '}
        <code>head</code> tags using the following format:
      </p>

      <h1>This is 1st level heading</h1>
      <p>This is a test paragraph.</p>
      <h2>This is 2nd level heading</h2>
      <p>This is a test paragraph.</p>
      <h3>This is 3rd level heading</h3>
      <p>This is a test paragraph.</p>
      <h4>This is 4th level heading</h4>
      <p>This is a test paragraph.</p>
      <h5>This is 5th level heading</h5>
      <p>This is a test paragraph.</p>
      <h6>This is 6th level heading</h6>
      <p>This is a test paragraph.</p>

      <h2>Basic block level elements</h2>

      <p>
        This is a normal paragraph (<code>p</code> element). To add some length
        to it, let us mention that this page was primarily written for testing
        the effect of <strong>user style sheets</strong>. You can use it for
        various other purposes as well, like just checking how your browser
        displays various HTML elements.
      </p>

      <p>
        This is another paragraph.{' '}
        <mark>
          I think it needs to be added that the set of elements tested is not
          exhaustive in any sense.
        </mark>{' '}
        I have selected those elements for which it can make sense to write user
        style sheet rules, in my opinion.
      </p>

      <div>
        This is a <code>div</code> element. Authors may use such elements
        instead of paragraph markup for various reasons. (End of{' '}
        <code>div</code>.)
      </div>

      <blockquote>
        <p>
          This is a <i>block quotation</i> containing a single paragraph. Well,
          not quite, since this is not <em>really</em> quoted text, but I hope
          you understand the point. After all, this page does not use HTML
          markup very normally anyway.
        </p>
      </blockquote>

      
    </div>
  )
}
