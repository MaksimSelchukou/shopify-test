const openContentBtn = document.querySelector('.collapsible__action--hidden')
const closedContentBtn = document.querySelector('.collapsible__action--visible')
let content = document.querySelector('.collapsible__content')


const contentCollapseToggle = (visibility) => new KeyframeEffect(
    content,
    [{visibility}],
    {duration: 200, fill: 'forwards'}
)

const collapsedAnimation = new Animation(contentCollapseToggle('hidden'), document.timeline);
// console.log(collapsedAnimation)
const unCollapsedAnimation = new Animation(contentCollapseToggle('visible'), document.timeline);

closedContentBtn.addEventListener('click', () => {
    unCollapsedAnimation.cancel()
    collapsedAnimation.finish();
})

openContentBtn.addEventListener('click', () => {
    collapsedAnimation.cancel()
    unCollapsedAnimation.finish()
})
