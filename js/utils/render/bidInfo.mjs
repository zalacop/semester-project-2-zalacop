function historyBids(bidInfo) {
    const bidderDiv = document.createElement("div");
    bidderDiv.classList.add("d-flex", "align-items-center", "gap-1", "history");

    const bidderName = document.createElement("p");
    bidderName.classList.add("italic");
    bidderName.innerText = "By " + bidInfo.bidderName + ":";

    const amount = document.createElement("p");
    amount.innerText = bidInfo.amount;

    bidderDiv.appendChild(bidderName);
    bidderDiv.appendChild(amount);

    return bidderDiv;
}


export default function createBidInfoCard(info) {
    const auctionInfoDiv = document.createElement("div");
    auctionInfoDiv.classList.add("auction-info", "mx-auto", "w-100");

    const div = document.createElement("div");
    div.classList.add("mx-5", "my-4");

    const seller = document.createElement("p");
    seller.classList.add("italic");
    seller.innerText = "By " + info.seller.name;

    const currentBidDiv = document.createElement('div');
    currentBidDiv.classList.add("d-flex", "align-items-center", "gap-1");

    const currentAmount = document.createElement("p");
    currentAmount.classList.add("bold", "fs-4");
    if (info.bids.length > 0) {
        const highestBidAmount = Math.max(...info.bids.map(bid => bid.amount));
        const currentBidAmount = highestBidAmount;

        currentAmount.innerText = "Current Bid: " + currentBidAmount + " kr";
    } 
    currentBidDiv.appendChild(currentAmount);

    const dateDiv = document.createElement("div");
    dateDiv.classList.add("d-flex", "align-items-center", "gap-1");
    
    const auctionsEnds = document.createElement("p");
    auctionsEnds.innerText= "Auction ends:";

    let date = new Date(info.endsAt);
    const dateFormat = {
        day: "numeric",
        month: "numeric",
        year: "numeric"
    };

    const ends = document.createElement("p");
    ends.innerText = `${date.toLocaleDateString("en-GB", dateFormat)}`;

    dateDiv.appendChild(auctionsEnds);
    dateDiv.appendChild(ends);

    const bidInputDiv = document.createElement("div");
    bidInputDiv.classList.add("d-flex", "align-items-center", "gap-2", "my-4", "w-100");
    
    const bidFlex = document.createElement("div");
    bidFlex.classList.add("d-flex", "align-items-center", "gap-2");
    
    const bidInput = document.createElement("input");
    bidInput.type = "text";
    bidInput.classList.add("w-25", "bid-value");
    
    const bidCurrency = document.createElement("p");
    bidCurrency.classList.add("fs-5", "bold", "my-auto");
    bidCurrency.innerText = "kr";
    
    const bidButton = document.createElement("button");
    bidButton.classList.add("btn", "btn-outline-dark", "px-4", "py-1", "fs-6", "cta");
    bidButton.id = "bid-button";
    bidButton.innerText = "Bid Now";
    
    bidFlex.appendChild(bidInput);
    bidFlex.appendChild(bidCurrency);
    bidFlex.appendChild(bidButton);
    
    bidInputDiv.appendChild(bidFlex);

    div.appendChild(seller);
    div.appendChild(currentBidDiv);
    div.appendChild(dateDiv);
    div.appendChild(bidInputDiv);


    const historyDiv = document.createElement("div");
    historyDiv.classList.add("mx-5")
    const historyParagraph = document.createElement("p");
    historyParagraph.innerText = "History bids:";

    historyDiv.appendChild(historyParagraph);

    const isThereToken = localStorage.getItem("accessToken");
 
    if (isThereToken) {
        const bidHistory = info.bids;
    
        bidHistory.forEach(bidInfo => {
            const bidderInfo = historyBids(bidInfo);

            historyDiv.appendChild(bidderInfo);
        });
        
        auctionInfoDiv.appendChild(div);
        auctionInfoDiv.appendChild(historyDiv);
    
        return auctionInfoDiv;
    }
    else {
        const mustLogin = document.createElement("div");
        const message = document.createElement("p");
        message.innerText = "You must login to view bid history!"

        mustLogin.appendChild(message);
        historyDiv.appendChild(mustLogin); 
        auctionInfoDiv.appendChild(div);
        auctionInfoDiv.appendChild(historyDiv); 

        return auctionInfoDiv;
    }
}