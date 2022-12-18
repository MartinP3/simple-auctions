// Multiple Listings
export function postTemplateA(postData) {
  const formattedDate = new Date(postData.endsAt).toLocaleDateString("en-us", {
    month: "short",
    day: "numeric",
  });
  const formattedTime = new Date(postData.endsAt).toLocaleTimeString("en-GB");

  if (postData.media.length < 1) {
    postData.media[0] =
      "https://images.unsplash.com/photo-1623018035782-b269248df916?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
  }

  if (postData.title === "") {
    postData.title = "Untitled";
  }
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card", "listingCard");
  cardContainer.innerHTML = `
  <a href="./page/index.html?id=${postData.id}">
  <img
    src="${postData.media[0]}"
    class="card-img-top"
    alt="Image related to ${postData.title}"
  />
  <div class="card-body">
    <h5 class="card-title">${postData.title}</h5>
    <p class="card-text">Ends at: ${formattedDate} ${formattedTime}</p>
    <p class="card-text">Bids: ${postData._count.bids}</p>
  </div>
  </a>`;

  return cardContainer;
}

export function renderPostTemplates(postDataList, parent) {
  parent.append(...postDataList.map(postTemplateA));
}
// **************

// Single listing

export function postTemplateB(postData) {
  const formattedDate = new Date(postData.endsAt).toLocaleDateString("en-us", {
    month: "short",
    day: "numeric",
  });
  const formattedTime = new Date(postData.endsAt).toLocaleTimeString("en-GB");

  // Shows last bids, breaks if there is none, I can't figure out how to work around it, I'm dumb
  const sortedBids = postData.bids.sort((a, b) => b.amount - a.amount);

  let bidsHTML = "";
  if (sortedBids.length === 0) {
    bidsHTML = "no bids yet";
  } else {
    for (let i = 1; i < sortedBids.length; i++) {
      bidsHTML = `<p>${sortedBids[0].amount}, ${sortedBids[0].bidderName}</p>
                  <p>${sortedBids[1].amount}, ${sortedBids[1].bidderName}</p>`;
    }
  }

  if (postData.media.length < 1) {
    postData.media[0] =
      "https://images.unsplash.com/photo-1623018035782-b269248df916?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
  }

  if (postData.title === "") {
    postData.title = "Untitled";
  }

  if (postData.tags.length < 1) {
    postData.tags = "Untagged";
  }

  const cardContainer = document.createElement("div");
  cardContainer.classList.add("row", "container-xxl", "listingPageSpacing");
  cardContainer.innerHTML = `
  <div class="col">
  <img
    src="${postData.media[0]}"
    alt="Image related to ${postData.title}"
    class="imgWidth"
  />
</div>
<div class="col mt-2">
  <h2 class="fw-normal lh-1">${postData.title}</h2>
  <p>Seller: ${postData.seller.name}</p>
  <p>${postData.description}</p>
  <p>Tags: ${postData.tags}</p>
  <div"> Bids:
    ${bidsHTML}
  </div>
  <p>Ends at: ${formattedDate} ${formattedTime}</p>
  <form id="makeBid">
    <div class="input-group mb-3">
      <input
        type="number"
        class="form-control"
        placeholder="$1000000"
        aria-label="Bid input amount"
        aria-describedby="button"
        required
      />
      <button class="btn btn-primary" type="button" id="button">
        Bid
      </button>
    </div>
  </form>
  <div class="d-flex">
    <div class="card-text">
      <a href="/auction/edit/" class="btn btn-primary btn-large mx-1"
        >Edit Listing</a
      >
    </div>
    <form id="deleteListing">
      <button class="btn btn-danger mx-1">Delete Listing</button>
    </form>
  </div>
</div>`;

  return cardContainer;
}

export function renderPostTemplate(postData, parent) {
  parent.append(postTemplateB(postData));
}
