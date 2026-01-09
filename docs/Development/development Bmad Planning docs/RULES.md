# Development Planning Docs - Rules

**Last Updated**: January 2026  
**Status**: Active Rules  
**Location**: `docs/Development/development Bmad Planning docs/`

---

## ⚠️ CRITICAL RULES - BMAD-METHOD COMPLIANCE

### Rule 1: BMAD-METHOD Framework Compliance (MANDATORY)

**MANDATORY RULE - STRICTLY ENFORCED**:
- **ALL documents in this folder MUST follow BMAD-METHOD framework structure and workflows**
- **ALL documents MUST be created or updated using BMAD-METHOD templates and workflows**
- **NO EXCEPTIONS** - This is a mandatory requirement for consistency and quality

**BMAD-METHOD Reference**:
- Framework Location: `instructions/BMAD-METHOD/`
- Workflow Templates: `instructions/BMAD-METHOD/src/modules/bmm/workflows/`
- Documentation: `instructions/BMAD-METHOD/docs/`

**Compliance Requirements**:
1. ✅ **Document Structure**: Follow BMAD-METHOD templates exactly
   - Use frontmatter with `stepsCompleted`, `inputDocuments`, `workflowType`
   - Follow template structure from BMAD-METHOD workflows
   - Include all required sections from templates

2. ✅ **Workflow Alignment**: Documents must align with BMAD-METHOD workflows
   - Product Brief → `1-analysis/create-product-brief/`
   - PRD → `2-plan-workflows/prd/`
   - UX Design → `2-plan-workflows/create-ux-design/`
   - Architecture → `3-solutioning/create-architecture/`
   - Epic Breakdown → `3-solutioning/create-epics-and-stories/`
   - Project Context → `generate-project-context/`

3. ✅ **Content Quality**: Documents must meet BMAD-METHOD standards
   - Comprehensive coverage of all required sections
   - Clear, actionable requirements and decisions
   - Proper traceability between documents
   - Consistent terminology and format

4. ✅ **Update Process**: When updating documents, follow BMAD-METHOD workflows
   - Review BMAD-METHOD templates before making changes
   - Maintain document structure and frontmatter
   - Update `stepsCompleted` array when adding new sections
   - Ensure consistency with other BMAD-METHOD documents

---

### Rule 2: Required Documents (BMAD-METHOD Core)

**MANDATORY**: The following documents MUST exist in this folder:

1. ✅ **Product Brief** (`Product_Brief.md`)
   - Workflow: `instructions/BMAD-METHOD/src/modules/bmm/workflows/1-analysis/create-product-brief/`
   - Template: `product-brief.template.md`
   - Purpose: Initial product analysis and vision

2. ✅ **PRD** (`PRD.md`)
   - Workflow: `instructions/BMAD-METHOD/src/modules/bmm/workflows/2-plan-workflows/prd/`
   - Template: `prd-template.md`
   - Purpose: Comprehensive product requirements

3. ✅ **UX Design Specification** (`UX_Design_Specification.md`)
   - Workflow: `instructions/BMAD-METHOD/src/modules/bmm/workflows/2-plan-workflows/create-ux-design/`
   - Template: `ux-design-template.md`
   - Purpose: User experience and interaction design

4. ✅ **Architecture Decision Document** (`Architecture_Decision_Document.md`)
   - Workflow: `instructions/BMAD-METHOD/src/modules/bmm/workflows/3-solutioning/create-architecture/`
   - Template: `architecture-decision-template.md`
   - Purpose: Technical architecture decisions

5. ✅ **Epic Breakdown** (`Epic_Breakdown.md`)
   - Workflow: `instructions/BMAD-METHOD/src/modules/bmm/workflows/3-solutioning/create-epics-and-stories/`
   - Template: `epics-template.md`
   - Purpose: Implementation epics and stories

6. ✅ **Project Context** (`Project_Context.md`)
   - Workflow: `instructions/BMAD-METHOD/src/modules/bmm/workflows/generate-project-context/`
   - Template: `project-context-template.md`
   - Purpose: Rules and patterns for developers/AI

**CRITICAL**: All required documents MUST exist and be kept up-to-date.

---

### Rule 3: Document Structure Requirements

**MANDATORY**: All documents MUST include:

1. **Frontmatter** (YAML):
   ```yaml
   ---
   stepsCompleted: []
   inputDocuments: []
   workflowType: 'workflow-type'
   lastStep: 0
   ---
   ```

2. **Document Header**:
   - Author name and role
   - Date (current date when created/updated)
   - Version number
   - Status (Active, Draft, Archived)
   - BMAD-METHOD reference

3. **Required Sections**:
   - As defined in BMAD-METHOD templates
   - All sections from template must be present
   - Sections may be empty but must exist

4. **Document Footer**:
   - Last Updated date
   - Status
   - Related Documents section
   - BMAD-METHOD workflow reference

---

### Rule 4: Document Update Process

**MANDATORY**: When updating documents:

1. **Before Updating**:
   - Review BMAD-METHOD template for the document
   - Check if changes align with BMAD-METHOD structure
   - Verify consistency with other BMAD-METHOD documents

2. **During Update**:
   - Maintain document structure and frontmatter
   - Update `stepsCompleted` array if adding new sections
   - Follow BMAD-METHOD workflow steps if applicable
   - Maintain traceability with related documents

3. **After Update**:
   - Update `Last Updated` date
   - Update CHANGELOG.md in parent folder
   - Verify document still follows BMAD-METHOD structure
   - Notify document owners if significant changes

---

### Rule 5: Document Consistency

**MANDATORY**: Documents must maintain consistency:

1. **Terminology**: Use consistent terminology across all documents
   - Reference PRD for requirement terminology
   - Reference Architecture Decision Document for technical terms
   - Reference Project Context for implementation terms

2. **Traceability**: Maintain traceability between documents
   - PRD requirements → Epic Breakdown stories
   - Architecture decisions → Project Context rules
   - UX Design patterns → Project Context implementation rules

3. **Version Alignment**: Keep document versions aligned
   - When PRD is updated, related documents should be reviewed
   - When Architecture is updated, Project Context should be reviewed
   - Major version changes should trigger review of all documents

---

### Rule 6: Forbidden Actions

**FORBIDDEN** - The following actions are NOT ALLOWED:

- ❌ **DO NOT** create documents without following BMAD-METHOD templates
- ❌ **DO NOT** modify document structure without referencing BMAD-METHOD workflows
- ❌ **DO NOT** skip required sections from BMAD-METHOD templates
- ❌ **DO NOT** create custom document formats that deviate from BMAD-METHOD
- ❌ **DO NOT** remove frontmatter or required document sections
- ❌ **DO NOT** update documents without reviewing BMAD-METHOD templates first
- ❌ **DO NOT** create documents outside this folder that should be here
- ❌ **DO NOT** ignore BMAD-METHOD workflow steps when creating/updating documents

---

### Rule 7: Optional Documents

**OPTIONAL**: The following documents may be created as needed:

1. **Research Reports**:
   - `Research_Domain.md` - Domain research
   - `Research_Market.md` - Market research
   - `Research_Technical.md` - Technical research
   - Workflow: `instructions/BMAD-METHOD/src/modules/bmm/workflows/1-analysis/research/`

2. **Implementation Readiness Report**:
   - `Implementation_Readiness.md` - Readiness assessment
   - Workflow: `instructions/BMAD-METHOD/src/modules/bmm/workflows/3-solutioning/check-implementation-readiness/`

3. **Technical Specifications**:
   - `Tech_Spec_[Feature].md` - Feature-specific technical specs
   - Workflow: `instructions/BMAD-METHOD/src/modules/bmm/workflows/bmad-quick-flow/create-tech-spec/`

4. **Workflow Status**:
   - `bmm-workflow-status.yaml` - BMAD workflow progress tracking
   - Workflow: `instructions/BMAD-METHOD/src/modules/bmm/workflows/workflow-status/`

**Note**: Optional documents should also follow BMAD-METHOD structure if created.

---

### Rule 8: Document Ownership

**MANDATORY**: All documents must have clear ownership:

- **Product Brief, PRD, UX Design, Epic Breakdown, Project Context**: Josef Lindbom (COO & Development Vision Lead)
- **Architecture Decision Document**: Craig Martin (CTO), Josef Lindbom (COO)
- **Research Reports**: Assigned based on research type
- **Technical Specifications**: Assigned based on feature

**Ownership Responsibilities**:
- Maintain document accuracy and completeness
- Update documents when requirements change
- Review and approve document updates
- Ensure BMAD-METHOD compliance

---

### Rule 9: Document Review Process

**MANDATORY**: Documents must be reviewed:

1. **Initial Review**: When document is first created
   - Verify BMAD-METHOD compliance
   - Check all required sections are present
   - Verify consistency with other documents

2. **Periodic Review**: Weekly or after major changes
   - Review document accuracy
   - Check if updates are needed
   - Verify BMAD-METHOD compliance still maintained

3. **Pre-Release Review**: Before major releases
   - Verify all documents are current
   - Check consistency across all documents
   - Ensure traceability is maintained

---

### Rule 10: CHANGELOG Requirements

**MANDATORY**: All changes must be tracked:

- **Location**: `docs/Development/CHANGELOG.md`
- **Format**: Follow Keep a Changelog format
- **Tracking**: Include developer/Cursor tracking in all entries
- **Frequency**: Update for every change to documents in this folder

**Format Example**:
```markdown
### Added
- Created/Updated [Document Name] - Description [Developer: Name] or [Cursor]
```

---

## Enforcement

**These rules are MANDATORY and STRICTLY ENFORCED**:
- All documents MUST follow BMAD-METHOD framework
- All updates MUST maintain BMAD-METHOD compliance
- All new documents MUST use BMAD-METHOD templates
- NO EXCEPTIONS - Compliance is non-negotiable

**Violations**:
- Documents not following BMAD-METHOD will be rejected
- Updates not maintaining compliance will be reverted
- New documents not using templates will be removed

---

## Related Documentation

- **BMAD-METHOD Framework**: `instructions/BMAD-METHOD/`
- **Folder README**: `docs/Development/development Bmad Planning docs/README.md`
- **Development CHANGELOG**: `docs/Development/CHANGELOG.md`
- **Project Rules**: `.cursorrules`

---

**Last Updated**: January 2026  
**Status**: Active Rules  
**Maintained By**: Josef Lindbom (COO & Development Vision Lead)
