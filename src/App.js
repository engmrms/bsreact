import './App.css';

import Accordion from './Accordion';
import { BSdropdown, BSModal } from './bootstrap';
import RSelect from './Select/index';
import { Pane, TabNav } from './TabNav';
import Wizered from './Users/Wizered';

function App() {
  return (
    <div className="container">
      {/* <BSvmodal/> */}
      <div className="row gy-3 h-100">
        <div>
          <BSModal />
        </div>
        <BSdropdown />

        <RSelect />
      </div>
      {/* <Grid direction="row" alignItems="center" justify="center" container space={4}>
        <Grid md={5} />
      </Grid> */}
      <Wizered />

      <Accordion className="">
        <Accordion.Pane heading={<span>teste test test s</span>}>
          <p>
            Icons are everywhere. These "little miracle workers" (as John Hicks described them) help us reinforce meaning in the interfaces we design
            and build. Their popularity in web design has never been greater; the conciseness and versatility of pictograms in particular make them a
            lovely fit for displays large and small. But icons on the web have had their fair share of challenges.'
          </p>
        </Accordion.Pane>
        <Accordion.Pane heading="Profile">
          <p>
            Most assistive devices will read aloud text inserted via CSS, and many of the Unicode characters icon fonts depend on are no exception.
            Best-case scenario, your "favorite" icon gets read aloud as "black favorite star." Worse-case scenario, it\'s read as "unpronounceable" or
            skipped entirely.
          </p>
        </Accordion.Pane>
        <Accordion.Pane heading="Profile2">
          <div>
            <p>
              Best-case scenario, your "favorite" icon gets read aloud as "black favorite star." Worse-case scenario, it\'s read as "unpronounceable"
              or skipped entirely.
            </p>
          </div>
        </Accordion.Pane>
      </Accordion>
      <TabNav>
        <Pane id="home" title="Home">
          Hwlosdf ssfs
        </Pane>
        <Pane id="profile" title="Profile">
          'Most assistive devices will read aloud text inserted via CSS, and many of the Unicode characters icon fonts depend on are no exception.
          Best-case scenario, your "favorite" icon gets read aloud as "black favorite star." Worse-case scenario, it\'s read as "unpronounceable" or
          skipped entirely.',
        </Pane>
      </TabNav>
    </div>
  );
}

const panels = [
  {
    label: "Seriously, Don't Use Icon Fonts",
    content:
      'Icons are everywhere. These "little miracle workers" (as John Hicks described them) help us reinforce meaning in the interfaces we design and build. Their popularity in web design has never been greater; the conciseness and versatility of pictograms in particular make them a lovely fit for displays large and small. But icons on the web have had their fair share of challenges.',
  },
  {
    label: 'Screen Readers Actually Read That Stuff',
    content:
      'Most assistive devices will read aloud text inserted via CSS, and many of the Unicode characters icon fonts depend on are no exception. Best-case scenario, your "favorite" icon gets read aloud as "black favorite star." Worse-case scenario, it\'s read as "unpronounceable" or skipped entirely.',
  },
  {
    label: 'They Fail Poorly and Often',
    content:
      'When your icon font fails, the browser treats it like any other font and replaces it with a fallback. Best-case scenario, you\'ve chosen your fallback characters carefully and something weird-looking but communicative still loads. Worse-case scenario (and far more often), the user sees something completely incongruous, usually the dreaded "missing character" glyph.',
  },
  {
    label: "They're a Nightmare if You're Dyslexic",
    content:
      "Many dyslexic people find it helpful to swap out a website's typeface for something like OpenDyslexic. But icon fonts get replaced as well, which makes for a frustratingly broken experience.",
  },
  {
    label: "There's Already a Better Way",
    content:
      "SVG is awesome for icons! It's a vector image format with optional support for CSS, JavaScript, reusability, accessibility and a bunch more. It was made for this sort of thing.",
  },
];

export default App;
