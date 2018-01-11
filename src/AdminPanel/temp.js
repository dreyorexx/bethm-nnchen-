<div class="header"><i class="write icon"></i>Compose
  <i class="remove icon" id="closeComposeModal"></i>
</div>

<div class="content" id="modalContent">
  <Grid>
    <Grid.Row>
      <Grid.Column width={16}>
        <input type="text" name="recipient" placeholder="To" id="recipient"/>
      </Grid.Column>
    </Grid.Row>
  </Grid>

  <Grid>
    <Grid.Row>
      <Grid.Column width={16}>
        <input type="text" name="subject" placeholder="Subject" id="subject"/>
      </Grid.Column>
    </Grid.Row>
  </Grid>

  <Grid>
    <Grid.Row>
      <Grid.Column width={16}>
        <textarea rows="10" placeholder="Message" id="msg"></textarea>
      </Grid.Column>
    </Grid.Row>
  </Grid>

  <Grid>
    <Grid.Row>
      <Grid.Column width={5}>
      </Grid.Column>

      <Grid.Column width={6}>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <button class="ui button" type="cancel" id="cancelBtn">Cancel</button>
            </Grid.Column>

            <Grid.Column width={8}>
              <button class="ui button" type="submit" id="sendBtn">Send</button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Grid.Column>

      <Grid.Column width={5}>
      </Grid.Column>

    </Grid.Row>
  </Grid>
</div>
