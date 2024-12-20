<script lang=ts>
    import './icon-text-card.css';
  
    interface Props {
      cards: {
        icon?: string,
        headline?: string, 
        text?: string, 
        buttons?:{
          url: string,
          text: string,
          type: string
        }[]
      }[]
    }

    let { cards }:Props = $props();
  </script>
  
  {#each cards as card}
    <div class="section__content card">
      <div class="card__content">
        {#if card.icon}
          <div class="card__icon">
            <img src={card.icon} alt={card.headline}>
          </div>
        {/if}
        {#if card.headline}
          <h3>
            {card.headline}
          </h3>
        {/if}
        {#if card.text}
          <p>
            {card.text}
          </p>
        {/if}
      </div>
      {#if card.buttons}
        <div class="buttons">
          {#each card.buttons as button}
            <a href={button.url} class="btn btn--{button.type}">{@html button.text}</a>
          {/each}
        </div>
      {/if}
    </div>
  {/each}
  