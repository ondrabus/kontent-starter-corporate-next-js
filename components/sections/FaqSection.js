import React from 'react'
import get from 'lodash.get'
import { Accordion, AccordionDetails, AccordionSummary, Container, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  section: {
    padding: theme.spacing(2),
  },
  intro: {
    textAlign: "center"
  },
  accordion: {
    marginTop: theme.spacing(1)
  }
}));

function FaqSection(props) {
  const section = get(props, 'section', null);
  const classes = useStyles();


  return (
    <section id={get(section, 'system.codename', null)} className={classes.section}>
      <Container>
        <div className={classes.intro}>
          {get(section, 'title.value', null) && (
            <Typography variant="h2">{get(section, 'title.value', null)}</Typography>
          )}
          {/* TODO: Create RichText element */}
          {get(section, 'subtitle.value', null) && (
            <Typography variant="subtitle1" dangerouslySetInnerHTML={{ __html: get(section, 'subtitle.value', null) }} />
          )}
        </div>

        {get(section, 'faq_items.value', []).map((faqItem, faqItem_idx) => (
          <Accordion key={faqItem_idx} className={classes.accordion}>
            <AccordionSummary
              aria-controls={`panel${faqItem_idx + 1}a-content`}
              id={`panel${faqItem_idx + 1}a--header`}
            >
              <Typography variant="h6">{get(faqItem, 'question.value', null)}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {/* TODO: Create RichText element */}
              <Typography dangerouslySetInnerHTML={{ __html: get(faqItem, 'answer.value', null) }} />
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </section>
  )
}

export default FaqSection
