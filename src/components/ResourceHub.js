import React from 'react';

const ResourceHub = () => {
  return (
    <div className="resource-hub">
      <h2>Safety Guides</h2>
      <div className="guide">
        <h4>First-Aid for Burns</h4>
        <p>1. Cool the burn with cool (not cold) running water. 2. Remove tight items. 3. Don't break blisters.</p>
      </div>
      <div className="guide">
        <h4>During an Earthquake</h4>
        <p>1. DROP to the ground. 2. Take COVER under a sturdy table. 3. HOLD ON until the shaking stops.</p>
      </div>
      <div className="guide">
        <h4>Flood Safety</h4>
        <p>1. Move immediately to higher ground. 2. Do not walk or drive through moving water.</p>
      </div>
    </div>
  );
};

export default ResourceHub;