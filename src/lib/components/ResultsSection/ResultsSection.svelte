<script lang=ts>
  import RunningString from "../RunningString/RunningString.svelte";
  import TextBlock from "../TextBlock/TextBlock.svelte";
  import Accordion from "../Accordion/Accordion.svelte";
  import './results-section.css';

  interface ResultsSectionProps {
    runningText?: string,
    mainHeadline?: string,
    preHeadeline?: string, 
    mainText?: string, 
    buttons?:{
      url: string,
      text: string,
      type: string
    }[],
    accordionItems?:{
      key: string,
      title: string,
      text: string
    }[]
	}

  const resultsProps:ResultsSectionProps = $props();

</script>

<div class="section section--green results-section"> 
  <RunningString runningText={resultsProps.runningText} />

  <div class="container">
    <div class="row">
      <div class="col results-section__text">
        <TextBlock { ...resultsProps } />
      </div>
      <div class="col results-section__accordion">
        <Accordion accordionItems={resultsProps.accordionItems} />
      </div>
    </div>
  </div>
</div>