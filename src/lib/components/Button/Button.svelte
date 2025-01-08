<script lang=ts>
  import './button.css';
  
  interface Props {
    tagButton?: boolean,
    text?: string,
    link?: string, 
    typeClass?: string,
    function?: () => void,
  }

  let button:Props = $props();

</script>

{#if button.tagButton}
  <button class="btn btn--{button.typeClass}" onclick={button.function}>
    {@html button.text}
    <span class="btn__icon">
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.665 3.69913L1.5927 9.5927L0.199768 8.15753L6.19886 2.335L1.665 2.335L1.665 0.335003H8.665H9.665V1.335V8.335H7.665L7.665 3.69913Z" fill="currentColor"/>
      </svg>
    </span>
  </button>
{:else} 
  {#if button.function} 
    <a href={button.link} class="btn btn--{button.typeClass}" onclick={button.function}>{@html button.text}</a>
  {:else}
    <a href={button.link} class="btn btn--{button.typeClass}">
      {@html button.text}
      <span class="btn__icon">
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.665 3.69913L1.5927 9.5927L0.199768 8.15753L6.19886 2.335L1.665 2.335L1.665 0.335003H8.665H9.665V1.335V8.335H7.665L7.665 3.69913Z" fill="currentColor"/>
        </svg>
      </span>
    </a>
  {/if}
  
{/if}
