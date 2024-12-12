<script lang=ts>
  import RunningString from "../RunningString/RunningString.svelte";
  import TextBlock from "../TextBlock/TextBlock.svelte";

  interface ResultsSectionProps {
    runningText?: string,
    mainHeadline?: string,
    preHeadeline?: string, 
    mainText?: string, 
    buttons?:{
      url: string,
      text: string,
      type: string
    }[]
	}

  //let { runningText, mainHeadline, preHeadeline, mainText, buttons }:ResultsSectionProps = $props();
  const resultsProps:ResultsSectionProps = $props();

  // let resultsProps = {
  //   runningText,
  //   mainHeadline,
  //   preHeadeline, 
  //   mainText, 
  //   buttons
  // }

</script>

<div class="section section--green"> 
    <RunningString runningText={resultsProps.runningText} />

    <div class="container">
      <div class="row">
        <TextBlock { ...resultsProps } />
        <div class="col">

        </div>
      </div>
    </div>
</div>