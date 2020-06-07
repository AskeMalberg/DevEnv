var assert = chai.assert;

describe('ReturnToHome', function() {
  it('should change textbox title to Placeholder', function() {
      returnHome();
    assert.equal(document.getElementById("container").querySelectorAll("h4")[0].innerHTML, "Placeholder");
  });

  it('should change textbox paragraph to home text', function() {
    returnHome();
  assert.equal(document.getElementById("container").querySelectorAll("p")[0].innerHTML, "Lorem ipsudm dolor sit amet consectetur adipisicing elit. Laboriosam quos, quis laudantium natus fugiat eveniet blanditiis nemo amet possimus. Eum, libero. Mollitia, explicabo rem dolorum eligendi consectetur voluptate voluptatem consequuntur ipsam quidem dolorem eius itaque aut alias dolores voluptates nisi sed magnam sequi maxime fuga reiciendis enim impedit doloribus? Animi.");
});
});

describe('ClickSite01', function() {
    it('should change textbox title to Site01', function() {
        changeContent(document.querySelectorAll("nav ul li")[0]);
      assert.equal(document.getElementById("container").querySelectorAll("h4")[0].innerHTML, "Site01");
    });

    it('should change textbox paragraph to Site01 text', function() {
        changeContent(document.querySelectorAll("nav ul li")[0]);
      assert.equal(document.getElementById("container").querySelectorAll("p")[0].innerHTML, "SiteOne random placeholder text");
    });
  });

  describe('ClickSite02', function() {
    it('should change textbox title to Site02', function() {
        changeContent(document.querySelectorAll("nav ul li")[1]);
      assert.equal(document.getElementById("container").querySelectorAll("h4")[0].innerHTML, "Site02");
    });

    it('should change textbox paragraph to Site02 text', function() {
        changeContent(document.querySelectorAll("nav ul li")[1]);
      assert.equal(document.getElementById("container").querySelectorAll("p")[0].innerHTML, "SiteTwo random placeholder text");
    });
  });

  describe('ClickSite03', function() {
    it('should change textbox title to Site03', function() {
        changeContent(document.querySelectorAll("nav ul li")[2]);
      assert.equal(document.getElementById("container").querySelectorAll("h4")[0].innerHTML, "Site03");
    });

    it('should change textbox paragraph to Site03 text', function() {
        changeContent(document.querySelectorAll("nav ul li")[2]);
      assert.equal(document.getElementById("container").querySelectorAll("p")[0].innerHTML, "SiteThree random placeholder text");
    });
  });