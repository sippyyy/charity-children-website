const progresses = document.querySelectorAll('.blog__progress')

progresses.forEach(progress=>{
    const currentPrice = progress.closest('.blog__detail').querySelector('.current__price').textContent
    const priceTarget = progress.closest('.blog__detail').querySelector('.price__target').textContent
    
    const currentPriceNo = currentPrice.slice(1,currentPrice.length)
    const priceTargetNo = priceTarget.slice(1,priceTarget.length)
    
    progress.value = currentPriceNo / priceTargetNo * 100
})
